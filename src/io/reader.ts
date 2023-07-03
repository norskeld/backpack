export class DataReader {
  private readonly view: DataView
  private readonly buffer: Uint8Array
  private bufferOffset: number

  get offset() {
    return this.bufferOffset
  }

  constructor(data: Uint8Array) {
    this.view = new DataView(data.buffer, data.byteOffset)
    this.buffer = data
    this.bufferOffset = 0
  }

  u8(): number {
    return this.view.getUint8(this.bufferOffset++)
  }

  i8(): number {
    return this.view.getInt8(this.bufferOffset++)
  }

  u16(): number {
    const res = this.view.getUint16(this.bufferOffset)
    this.bufferOffset += 2
    return res
  }

  i16(): number {
    const res = this.view.getInt16(this.bufferOffset)
    this.bufferOffset += 2
    return res
  }

  u32(): number {
    const res = this.view.getUint32(this.bufferOffset)
    this.bufferOffset += 4
    return res
  }

  i32(): number {
    const res = this.view.getInt32(this.bufferOffset)
    this.bufferOffset += 4
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
    const res = this.view.getFloat32(this.bufferOffset)
    this.bufferOffset += 4
    return res
  }

  f64(): number {
    const res = this.view.getFloat64(this.bufferOffset)
    this.bufferOffset += 8
    return res
  }

  atBufferOffset(): number {
    return this.buffer[this.bufferOffset++]
  }

  range(length: number): Uint8Array {
    const res = this.buffer.subarray(this.bufferOffset, this.bufferOffset + length)
    this.bufferOffset += length
    return res
  }
}
