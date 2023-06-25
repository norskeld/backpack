import type { ExtensionCodec } from './codec'
import { Extension, Format } from './formats'
import { DataReader } from './rw'

export interface DeserializerOptions {
  extensionCodec?: ExtensionCodec
}

export class DeserializationError extends Error {
  constructor(message: string) {
    super(`DeserializationError: ${message}`)
  }
}

export class Deserializer {
  private readonly reader: DataReader
  private readonly textCodec: TextDecoder
  private readonly extensionCodec?: ExtensionCodec
  private readonly refs: Map<number, string>

  constructor(reader: DataReader, { extensionCodec }: DeserializerOptions = {}) {
    this.reader = reader
    this.extensionCodec = extensionCodec
    this.textCodec = new TextDecoder()
    this.refs = new Map()
  }

  decode(): unknown {
    const type = this.reader.readBuffer()

    // Format: positive fixint
    if (type <= 127) return type
    // Format: negative fixint
    else if ((type & 0xe0) === 0xe0) return type - 256
    // Format: fixstr
    else if ((type & 0xe0) === Format.FixStr) return this.readString(type & 0x1f)
    // Format: fixarray
    else if ((type & 0xf0) === Format.FixArray) return this.readArray(type & 0xf)
    // Format: fixmap
    else if ((type & 0xf0) === Format.FixMap) return this.readObject(type & 0xf)

    // prettier-ignore
    switch (type) {
      // Null.
      case Format.Nil: return null

      // Booleans.
      case Format.False: return false
      case Format.True: return true

      // Unsigned integers.
      case Format.Uint8: return this.reader.readU8()
      case Format.Uint16: return this.reader.readU16()
      case Format.Uint32: return this.reader.readU32()
      case Format.Uint64: return this.reader.readU64()

      // Signed integers.
      case Format.Int8: return this.reader.readI8()
      case Format.Int16: return this.reader.readI16()
      case Format.Int32: return this.reader.readI32()
      case Format.Int64: return this.reader.readI64()

      // Floats.
      case Format.Float32: return this.reader.readF32()
      case Format.Float64: return this.reader.readF64()

      // String.
      case Format.Str8: return this.readString(this.reader.readU8())
      case Format.Str16: return this.readString(this.reader.readU16())
      case Format.Str32: return this.readString(this.reader.readU32())

      // Binary.
      case Format.Bin8: return this.reader.readRange(this.reader.readU8())
      case Format.Bin16: return this.reader.readRange(this.reader.readU16())
      case Format.Bin32: return this.reader.readRange(this.reader.readU32())

      // Arrays.
      case Format.Array16: return this.readArray(this.reader.readU16())
      case Format.Array32: return this.readArray(this.reader.readU32())

      // Maps (objects).
      case Format.Map16: return this.readObject(this.reader.readU16())
      case Format.Map32: return this.readObject(this.reader.readU32())

      // Extensions.
      case Format.FixExt1: return this.readExt(1)
      case Format.FixExt2: return this.readExt(2)
      case Format.FixExt4: return this.readExt(4)
      case Format.FixExt8: return this.readExt(8)
      case Format.FixExt16: return this.readExt(16)
      case Format.Ext8: return this.readExt(this.reader.readU8())
      case Format.Ext16: return this.readExt(this.reader.readU16())
      case Format.Ext32: return this.readExt(this.reader.readU32())

      // Otherwise fail.
      default: throw new DeserializationError(
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

  private readRef(size: number): string {
    // prettier-ignore
    switch (size) {
      case 1: return this.refs.get(this.reader.readU8())!
      case 2: return this.refs.get(this.reader.readU16())!

      default: throw new DeserializationError(
        `Invalid reference size at ${this.reader.offset}. Expected 1-2 bytes, but got ${size}.`
      )
    }
  }

  private readTimestamp(size: number): Date {
    const data = this.reader.readRange(size)

    switch (size) {
      case 4: {
        const sec =
          ((data[0] << 24) >>> 0) + ((data[1] << 16) >>> 0) + ((data[2] << 8) >>> 0) + data[3]

        return new Date(sec * 1000)
      }

      case 8: {
        const ns =
          ((data[0] << 22) >>> 0) +
          ((data[1] << 14) >>> 0) +
          ((data[2] << 6) >>> 0) +
          (data[3] >>> 2)

        const sec =
          (data[3] & 0x3) * 4294967296 +
          ((data[4] << 24) >>> 0) +
          ((data[5] << 16) >>> 0) +
          ((data[6] << 8) >>> 0) +
          data[7]

        return new Date(sec * 1000 + ns / 1000000)
      }

      case 12: {
        const ns =
          ((data[0] << 24) >>> 0) + ((data[1] << 16) >>> 0) + ((data[2] << 8) >>> 0) + data[3]

        return new Date(data[4] * 1000 + ns / 1000000)
      }

      default: {
        throw new DeserializationError(
          `Invalid date size at ${this.reader.offset}. Expected 4, 8 or 12 bytes, but got ${size}.`
        )
      }
    }
  }

  private readExt(size: number): unknown {
    const extType = this.reader.readI8()

    // prettier-ignore
    switch (extType) {
      case Extension.Timestamp: return this.readTimestamp(size)
      case Extension.Ref: return this.readRef(size)
      default: return this.extensionCodec?.decode(extType, this.reader.readRange(size))
    }
  }
}
