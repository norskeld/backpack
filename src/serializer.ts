import type { ExtensionCodec } from './codec'
import { Extension, Type } from './constants'
import { DataWriter } from './rw'

export interface SerializerOptions {
  extensionCodec?: ExtensionCodec
}

export class Serializer {
  private readonly writer: DataWriter
  private readonly textCodec: TextEncoder
  private readonly extensionCodec?: ExtensionCodec
  private readonly refs: Map<string, number>

  constructor(writer: DataWriter, { extensionCodec }: SerializerOptions = {}) {
    this.writer = writer
    this.textCodec = new TextEncoder()
    this.extensionCodec = extensionCodec
    this.refs = new Map()
  }

  encode(data: unknown): void {
    // TODO: Optionally ignore `undefined`.
    if (data === null || data === undefined) return this.writeNull()

    if (typeof data === 'boolean') return this.writeBoolean(data)
    if (typeof data === 'number') return this.writeNumber(data)
    if (typeof data === 'string') return this.writeString(data)

    if (typeof data === 'object') {
      // Try to apply extensions first in case `data` extends UIint8Array or Array.
      if (this.writeExt(data)) return

      if (data instanceof Uint8Array) return this.writeBinary(data)
      if (Array.isArray(data)) return this.writeArray(data)

      return this.writeObject(data)
    }

    throw new Error(`Don't know how to serialize ${data}`)
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
    this.writer.writeU8(Type.Nil)
  }

  private writeBoolean(b: boolean): void {
    this.writer.writeU8(b ? Type.True : Type.False)
  }

  private writeNumber(n: number): void {
    // Integers.
    if (Number.isInteger(n)) this.writeInteger(n)
    // Floats (and Infinities, I think?).
    else this.writeFloat(n)
  }

  private writeInteger(n: number): void {
    // Positive integers.
    if (n > 0) {
      // Type: positive fixint
      if (n <= 127) this.writer.writeU8(n)
      // Type: uint 8
      else if (n <= 255) this.writer.writeU8(Type.Uint8).writeU8(n)
      // Type: uint 16
      else if (n <= 65535) this.writer.writeU8(Type.Uint16).writeU16(n)
      // Type: uint 32
      else if (n <= 4294967295) this.writer.writeU8(Type.Uint32).writeU32(n)
      // Type: uint 64
      else this.writer.writeU8(Type.Uint64).writeU64(n)
    }
    // Negative integers.
    else {
      // Type: negative fixint
      if (n >= -32) this.writer.writeI8(n)
      // Type: int 8
      else if (n >= -128) this.writer.writeU8(Type.Int8).writeI8(n)
      // Type: int 16
      else if (n >= -32768) this.writer.writeU8(Type.Int16).writeI16(n)
      // Type: int 32
      else if (n >= -2147483648) this.writer.writeU8(Type.Int32).writeI32(n)
      // Type: int 64
      else this.writer.writeU8(Type.Int64).writeI64(n)
    }
  }

  private writeFloat(f: number): void {
    // NOTE: Writing as a double-precision (f64) is intentional here, since writing a
    //  single-precision number (f32) leads to precision loss. :(
    this.writer.writeU8(Type.Float64).writeF64(f)
  }

  private writeString(s: string): void {
    const encoded = this.textCodec.encode(s)
    const length = encoded.length

    // NOTE: Somehow with these constraints it produces smaller outputs.
    if (length >= 4 && length <= 16) {
      this.writeRef(s)
    } else {
      // Type: fixstr (up to 31 bytes)
      if (length <= 31) this.writer.writeU8(Type.FixStr | length)
      // Type: str + length (u8)
      else if (length <= 255) this.writer.writeU8(Type.Str8).writeU8(length)
      // Type: str + length (u16)
      else if (length <= 65535) this.writer.writeU8(Type.Str16).writeU16(length)
      // Type: str + length (u32)
      else if (length <= 4294967295) this.writer.writeU8(Type.Str32).writeU32(length)
      // Otherwise throwing...
      else throw new Error('String is too long')

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

    // Type: fixext 1 + extension ref 8 + ref 8
    if (ref <= 255) this.writer.writeU8(Type.FixExt1).writeI8(Extension.Ref8).writeU8(ref)
    // Type: fixext 2 + extension ref 16 + ref 16
    else this.writer.writeU8(Type.FixExt2).writeI8(Extension.Ref16).writeU16(ref)
  }

  private writeBinary(data: Uint8Array): void {
    const length = data.length

    // Type: bin + length (u8)
    if (length <= 255) this.writer.writeU8(Type.Bin8).writeU8(length)
    // Type: bin + length (u16)
    else if (length <= 65535) this.writer.writeU8(Type.Bin16).writeU16(length)
    // Type: bin + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Type.Bin32).writeU32(length)
    // Otherwise throwing...
    else throw new Error('Data is too long')

    this.writer.writeBytes(data)
  }

  private writeArray(array: unknown[]): void {
    const length = array.length

    // Type: fixarray (up to 15 elements)
    if (length <= 15) this.writer.writeU8(Type.FixArray | length)
    // Type: array + length (u16)
    else if (length <= 65535) this.writer.writeU8(Type.Array16).writeU16(length)
    // Type: array + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Type.Array32).writeU32(length)
    // Otherwise throwing...
    else throw new Error('Array is too big')

    for (const item of array) {
      this.encode(item)
    }
  }

  private writeObject(o: object): void {
    const entries = Object.entries(o)
    const length = entries.length

    // Type: fixmap + length (up to 15 elements)
    if (length <= 15) this.writer.writeU8(Type.FixMap | length)
    // Type: map + length (u16)
    else if (length <= 65535) this.writer.writeU8(Type.Map16).writeU16(length)
    // Type: map + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Type.Map32).writeU32(length)
    // Otherwise throwing...
    else throw new Error('Map is too big')

    for (const [key, value] of entries) {
      this.encode(key)
      this.encode(value)
    }
  }

  private writeExt(object: unknown): boolean {
    if (!this.extensionCodec) {
      return false
    }

    const type = this.extensionCodec.getType(object)

    if (type < 0) {
      throw new Error('Negative extension types are reserved.')
    }

    const encoded = this.extensionCodec.encode(object)
    const length = encoded.length

    // Resolving and writing extension format.

    // Type: fixext 1
    if (length == 1) this.writer.writeU8(Type.FixExt1)
    // Type: fixext 2
    else if (length == 2) this.writer.writeU8(Type.FixExt2)
    // Type: fixext 4
    else if (length == 4) this.writer.writeU8(Type.FixExt4)
    // Type: fixext 8
    else if (length == 8) this.writer.writeU8(Type.FixExt8)
    // Type: fixext 16
    else if (length == 16) this.writer.writeU8(Type.FixExt16)
    // Type: ext 8 + length (u8)
    else if (length <= 255) this.writer.writeU8(Type.Ext8).writeU8(length)
    // Type: ext 16 + length (u16)
    else if (length <= 65535) this.writer.writeU8(Type.Ext16).writeU16(length)
    // Type: ext 32 + length (u32)
    else if (length <= 4294967295) this.writer.writeU8(Type.Ext32).writeU32(length)
    // Otherwise throwing...
    else throw new Error('Size must be at most 4294967295.')

    // Writing actual custom extension type and data it encoded.
    this.writer.writeU8(type)
    this.writer.writeBytes(encoded)

    return true
  }
}
