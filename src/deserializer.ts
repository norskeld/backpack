import type { ExtensionCodec } from './codec'
import { Extension, Type } from './constants'
import { DataReader } from './rw'

export interface DeserializerOptions {
  extensionCodec?: ExtensionCodec
}

export class Deserializer {
  private readonly reader: DataReader
  private readonly textCodec: TextDecoder
  private readonly extensionCodec?: ExtensionCodec
  private readonly refs: Map<number, string>

  constructor(reader: DataReader, { extensionCodec }: DeserializerOptions = {}) {
    this.reader = reader
    this.textCodec = new TextDecoder()
    this.extensionCodec = extensionCodec
    this.refs = new Map()
  }

  decode(): unknown {
    const type = this.reader.readBuffer()

    // Type: positive fixint
    if (type <= 127) return type
    // Type: negative fixint
    else if ((type & 0xe0) === 0xe0) return type - 256
    // Type: fixstr
    else if ((type & 0xe0) === Type.FixStr) return this.readString(type & 0x1f)
    // Type: fixarray
    else if ((type & 0xf0) === Type.FixArray) return this.readArray(type & 0xf)
    // Type: fixmap
    else if ((type & 0xf0) === Type.FixMap) return this.readObject(type & 0xf)

    // prettier-ignore
    switch (type) {
      // Null.
      case Type.Nil: return null

      // Booleans.
      case Type.False: return false
      case Type.True: return true

      // Unsigned integers.
      case Type.Uint8: return this.reader.readU8()
      case Type.Uint16: return this.reader.readU16()
      case Type.Uint32: return this.reader.readU32()
      case Type.Uint64: return this.reader.readU64()

      // Signed integers.
      case Type.Int8: return this.reader.readI8()
      case Type.Int16: return this.reader.readI16()
      case Type.Int32: return this.reader.readI32()
      case Type.Int64: return this.reader.readI64()

      // Floats.
      case Type.Float32: return this.reader.readF32()
      case Type.Float64: return this.reader.readF64()

      // String.
      case Type.Str8: return this.readString(this.reader.readU8())
      case Type.Str16: return this.readString(this.reader.readU16())
      case Type.Str32: return this.readString(this.reader.readU32())

      // Binary.
      case Type.Bin8: return this.reader.readRange(this.reader.readU8())
      case Type.Bin16: return this.reader.readRange(this.reader.readU16())
      case Type.Bin32: return this.reader.readRange(this.reader.readU32())

      // Arrays.
      case Type.Array16: return this.readArray(this.reader.readU16())
      case Type.Array32: return this.readArray(this.reader.readU32())

      // Maps (objects).
      case Type.Map16: return this.readObject(this.reader.readU16())
      case Type.Map32: return this.readObject(this.reader.readU32())

      // Extensions.
      case Type.FixExt1: return this.readExt(1)
      case Type.FixExt2: return this.readExt(2)
      case Type.FixExt4: return this.readExt(4)
      case Type.FixExt8: return this.readExt(8)
      case Type.FixExt16: return this.readExt(16)
      case Type.Ext8: return this.readExt(this.reader.readU8())
      case Type.Ext16: return this.readExt(this.reader.readU16())
      case Type.Ext32: return this.readExt(this.reader.readU32())

      // Otherwise fail.
      default: throw new Error(
        `Unrecognized BackPack type 0x${type.toString(16)} at ${this.reader.offset}.`
      )
    }
  }

  decodeHeader(): void {
    let size = this.reader.readU16()

    while (size > 0) {
      const ref = this.reader.readU16()
      const length = this.reader.readU16()
      const bytes = this.reader.readRange(length)

      this.refs.set(ref, this.textCodec.decode(bytes))

      --size
    }
  }

  private readString(length: number): string {
    const bytes = this.reader.readRange(length)

    for (const byte of bytes) {
      if (byte > 127) {
        return this.textCodec.decode(bytes)
      }
    }

    return String.fromCharCode(...bytes)
  }

  private readArray(length: number): unknown[] {
    const array = new Array(length)

    for (let index = 0; index < length; ++index) {
      array[index] = this.decode()
    }

    return array
  }

  private readObject(length: number): Record<string, unknown> {
    const map: Record<string, unknown> = {}

    while (length > 0) {
      const key = this.decode() as string
      const value = this.decode()

      map[key] = value

      --length
    }

    return map
  }

  private readRef(ref: number): string {
    return this.refs.get(ref)!
  }

  private readExt(length: number): unknown {
    const extType = this.reader.readI8()

    // prettier-ignore
    switch (extType) {
      case Extension.Ref8: return this.readRef(this.reader.readU8())
      case Extension.Ref16: return this.readRef(this.reader.readU16())
      default: return this.extensionCodec?.decode(extType, this.reader.readRange(length))
    }
  }
}
