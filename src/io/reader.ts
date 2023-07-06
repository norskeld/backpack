export class DataReader {
  private pos: number
  private readonly view: DataView
  private readonly array: Uint8Array

  get offset() {
    return this.pos
  }

  constructor(array: Uint8Array) {
    this.view = new DataView(array.buffer, array.byteOffset)
    this.array = array
    this.pos = 0
  }

  u8(): number {
    return this.view.getUint8(this.pos++)
  }

  i8(): number {
    return this.view.getInt8(this.pos++)
  }

  u16(): number {
    const res = this.view.getUint16(this.pos)
    this.pos += 2
    return res
  }

  i16(): number {
    const res = this.view.getInt16(this.pos)
    this.pos += 2
    return res
  }

  u32(): number {
    const res = this.view.getUint32(this.pos)
    this.pos += 4
    return res
  }

  i32(): number {
    const res = this.view.getInt32(this.pos)
    this.pos += 4
    return res
  }

  u64(): number {
    const hi = this.u32()
    const lo = this.u32()

    return hi * 4_294_967_296 + lo
  }

  i64(): number {
    const hi = this.i32()
    const lo = this.u32()

    return hi * 4_294_967_296 + lo
  }

  f32(): number {
    const res = this.view.getFloat32(this.pos)
    this.pos += 4
    return res
  }

  f64(): number {
    const res = this.view.getFloat64(this.pos)
    this.pos += 8
    return res
  }

  current(): number {
    return this.array[this.pos++]
  }

  range(length: number): Uint8Array {
    const res = this.array.subarray(this.pos, this.pos + length)
    this.pos += length
    return res
  }
}
