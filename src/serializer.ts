import type { ExtensionCodec } from './codec'
import { Extension, Format } from './formats'
import { DataWriter } from './rw'

export interface SerializerOptions {
  extensionCodec?: ExtensionCodec
}

export class SerializationError extends Error {
  constructor(message: string) {
    super(`SerializationError: ${message}`)
  }
}

export class Serializer {
  private readonly writer: DataWriter
  private readonly textCodec: TextEncoder
  private readonly extensionCodec?: ExtensionCodec
  private readonly refs: Map<string, number>

  constructor(writer: DataWriter, { extensionCodec }: SerializerOptions = {}) {
    this.writer = writer
    this.extensionCodec = extensionCodec
    this.textCodec = new TextEncoder()
    this.refs = new Map()
  }

  encode(data: unknown): void {
    if (data === null || data === undefined) return this.writeNull()

    if (typeof data === 'boolean') return this.writeBoolean(data)
    if (typeof data === 'number') return this.writeNumber(data)
    if (typeof data === 'string') return this.writeString(data)

    if (typeof data === 'object') {
      // Try to apply extensions first in case `data` extends `UIint8Array` or `Array`.
      if (this.writeExt(data)) return

      if (data instanceof Map) return this.writeMap(data)
      if (data instanceof Set) return this.writeSet(data)
      if (data instanceof Date) return this.writeTimestamp(data)
      if (data instanceof Uint8Array) return this.writeBinary(data)
      if (Array.isArray(data)) return this.writeArray(data)

      return this.writeObject(data)
    }

    throw new SerializationError(`Unknown data type.`)
  }

  takeBytes(): Uint8Array {
    return this.writer.takeBytes()
  }

  encodeHeader(): void {
    this.writer.writeU16(this.refs.size)

    for (const [key, ref] of this.refs.entries()) {
      const encoded = this.textCodec.encode(key)
      this.writer.writeU16(ref).writeU16(encoded.length).writeBytes(encoded)
    }
  }

  private writeNull(): void {
    this.writer.writeU8(Format.Nil)
  }

  private writeBoolean(b: boolean): void {
    this.writer.writeU8(b ? Format.True : Format.False)
  }

  private writeNumber(n: number): void {
    if (Number.isInteger(n)) {
      this.writeInteger(n)
    } else {
      this.writeFloat(n)
    }
  }

  private writeInteger(n: number): void {
    // Positive integers.
    if (n > 0) {
      // Format: positive fixint
      if (n <= 127) this.writer.writeU8(n)
      // Format: uint 8
      else if (n <= 255) this.writer.writeU8(Format.Uint8).writeU8(n)
      // Format: uint 16
      else if (n <= 65535) this.writer.writeU8(Format.Uint16).writeU16(n)
      // Format: uint 32
      else if (n <= 4294967295) this.writer.writeU8(Format.Uint32).writeU32(n)
      // Format: uint 64
      else this.writer.writeU8(Format.Uint64).writeU64(n)
    }
    // Negative integers.
    else {
      // Format: negative fixint
      if (n >= -32) this.writer.writeI8(n)
      // Format: int 8
      else if (n >= -128) this.writer.writeU8(Format.Int8).writeI8(n)
      // Format: int 16
      else if (n >= -32768) this.writer.writeU8(Format.Int16).writeI16(n)
      // Format: int 32
      else if (n >= -2147483648) this.writer.writeU8(Format.Int32).writeI32(n)
      // Format: int 64
      else this.writer.writeU8(Format.Int64).writeI64(n)
    }
  }

  private writeFloat(f: number): void {
    // NOTE: Writing as a double-precision (f64) is intentional here, since writing a
    //  single-precision number (f32) leads to precision loss. :(
    this.writer.writeU8(Format.Float64).writeF64(f)
  }

  private writeString(s: string): void {
    const encoded = this.textCodec.encode(s)
    const length = encoded.length

    // NOTE: Somehow with these constraints it produces smaller outputs.
    if (length >= 4 && length <= 16) {
      this.writeRef(s)
    } else {
      // Format: fixstr (up to 31 bytes)
      if (length <= 31) this.writer.writeU8(Format.FixStr | length)
      // Format: str + length (u8)
      else if (length <= 255) this.writer.writeU8(Format.Str8).writeU8(length)
      // Format: str + length (u16)
      else if (length <= 65535) this.writer.writeU8(Format.Str16).writeU16(length)
      // Format: str + length (u32)
      else if (length <= 4294967295) this.writer.writeU8(Format.Str32).writeU32(length)
      // Otherwise fail.
      else throw new SerializationError('String is too long. Max (2^32)-1 bytes.')

      this.writer.writeBytes(encoded)
    }
  }

  private writeRef(key: string): void {
    let ref: number

    if (this.refs.has(key)) {
      ref = this.refs.get(key)!
    } else {
      ref = this.refs.size + 1
      this.refs.set(key, ref)
    }

    // Format: fixext 1 + extension ref + ref (u8)
    if (ref <= 255) this.writer.writeU8(Format.FixExt1).writeI8(Extension.Ref).writeU8(ref)
    // Format: fixext 2 + extension ref + ref (u16)
    else this.writer.writeU8(Format.FixExt2).writeI8(Extension.Ref).writeU16(ref)
  }

  private writeTimestamp(date: Date): void {
    const seconds = date.getTime() / 1000
    const ms = date.getMilliseconds()

    // 32-bit seconds
    if (ms === 0 && seconds >= 0 && seconds <= 4294967295) {
      this.writer
        .writeU8(Format.FixExt4)
        .writeI8(Extension.Timestamp)
        .writeBytes([seconds >>> 24, seconds >>> 16, seconds >>> 8, seconds])
    }
    // 30-bit nanoseconds + 34-bit seconds
    else if (seconds >= 0 && seconds <= 17179869183) {
      const ns = ms * 1000000

      this.writer
        .writeU8(Format.FixExt8)
        .writeI8(Extension.Timestamp)
        .writeBytes([ns >>> 22, ns >>> 14, ns >>> 6, ((ns << 2) >>> 0) | (seconds / 4294967296)])
        .writeBytes([seconds >>> 24, seconds >>> 16, seconds >>> 8, seconds])
    }
    // 32-bit nanoseconds + 64-bit seconds
    else {
      const ns = ms * 1000000

      this.writer
        .writeU8(Format.Ext8)
        .writeI8(Extension.Timestamp)
        .writeBytes([ns >>> 24, ns >>> 16, ns >>> 8, ns])
        .writeI64(seconds)
    }
  }

  private writeBinary(data: Uint8Array): void {
    const length = data.length

    // Format: bin + length (u8)
    if (length <= 255) this.writer.writeU8(Format.Bin8).writeU8(length)
    // Format: bin + length (u16)
    else if (length <= 65535) this.writer.writeU8(Format.Bin16).writeU16(length)
    // Format: bin + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Format.Bin32).writeU32(length)
    // Otherwise fail.
    else throw new SerializationError('Binary data is too big. Max (2^32)-1 bytes.')

    this.writer.writeBytes(data)
  }

  private writeArray(array: unknown[]): void {
    const length = array.length

    // Format: fixarray (up to 15 elements)
    if (length <= 15) this.writer.writeU8(Format.FixArray | length)
    // Format: array + length (u16)
    else if (length <= 65535) this.writer.writeU8(Format.Array16).writeU16(length)
    // Format: array + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Format.Array32).writeU32(length)
    // Otherwise fail.
    else throw new SerializationError(`Array is too big. Max (2^32)-1 elements.`)

    for (const item of array) {
      this.encode(item)
    }
  }

  private writeObject(o: object): void {
    const entries = Object.entries(o)
    const size = entries.length

    // Format: fixmap + size (up to 15 elements)
    if (size <= 15) this.writer.writeU8(Format.FixMap | size)
    // Format: map + size (u16)
    else if (size <= 65535) this.writer.writeU8(Format.Map16).writeU16(size)
    // Format: map + size (u32)
    else if (size <= 4294967295) this.writer.writeU8(Format.Map32).writeU32(size)
    // Otherwise fail.
    else throw new SerializationError('Object is too big. Max (2^32)-1 entries.')

    for (const [key, value] of entries) {
      this.encode(key)
      this.encode(value)
    }
  }

  private writeMap(m: Map<unknown, unknown>): void {
    const entries = m.entries()
    const size = m.size

    // Format: fixext 1 + extension map + size (u8)
    if (size <= 255) this.writer.writeU8(Format.FixExt1).writeI8(Extension.Map).writeU8(size)
    // Format: fixext 2 + extension map + size (u16)
    else if (size <= 65535)
      this.writer.writeU8(Format.FixExt2).writeI8(Extension.Map).writeU16(size)
    // Format: fixext 4 + extension map + size (u32)
    else if (size <= 4294967295)
      this.writer.writeU8(Format.FixExt4).writeI8(Extension.Map).writeU32(size)
    // Otherwise fail.
    else throw new SerializationError('Map is too big. Max (2^32)-1 entries.')

    for (const [key, value] of entries) {
      this.encode(key)
      this.encode(value)
    }
  }

  private writeSet(s: Set<unknown>): void {
    const values = s.values()
    const size = s.size

    // Format: fixext 1 + extension set + size (u8)
    if (size <= 255) this.writer.writeU8(Format.FixExt1).writeI8(Extension.Set).writeU8(size)
    // Format: fixext 2 + extension set + size (u16)
    else if (size <= 65535)
      this.writer.writeU8(Format.FixExt2).writeI8(Extension.Set).writeU16(size)
    // Format: fixext 4 + extension set + size (u32)
    else if (size <= 4294967295)
      this.writer.writeU8(Format.FixExt4).writeI8(Extension.Set).writeU32(size)
    // Otherwise fail.
    else throw new SerializationError('Set is too big. Max (2^32)-1 entries.')

    for (const value of values) {
      this.encode(value)
    }
  }

  private writeExt(object: unknown): boolean {
    if (!this.extensionCodec) {
      return false
    }

    const type = this.extensionCodec.getType(object)

    if (type < 0) {
      throw new SerializationError('Negative extension types are reserved.')
    }

    const encoded = this.extensionCodec.encode(object)
    const size = encoded.length

    // Resolving and writing extension format.

    // Format: fixext 1
    if (size == 1) this.writer.writeU8(Format.FixExt1)
    // Format: fixext 2
    else if (size == 2) this.writer.writeU8(Format.FixExt2)
    // Format: fixext 4
    else if (size == 4) this.writer.writeU8(Format.FixExt4)
    // Format: fixext 8
    else if (size == 8) this.writer.writeU8(Format.FixExt8)
    // Format: fixext 16
    else if (size == 16) this.writer.writeU8(Format.FixExt16)
    // Format: ext 8 + size (u8)
    else if (size <= 255) this.writer.writeU8(Format.Ext8).writeU8(size)
    // Format: ext 16 + size (u16)
    else if (size <= 65535) this.writer.writeU8(Format.Ext16).writeU16(size)
    // Format: ext 32 + size (u32)
    else if (size <= 4294967295) this.writer.writeU8(Format.Ext32).writeU32(size)
    // Otherwise fail.
    else throw new SerializationError(`Extension data is too big. Max (2^32)-1 bytes.`)

    // Writing actual custom extension type and data it encoded.
    this.writer.writeU8(type)
    this.writer.writeBytes(encoded)

    return true
  }
}