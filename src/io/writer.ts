const BUF_INITIAL_SIZE = 2048

export class DataWriter {
  private offset: number
  private view: DataView
  private buffer: Uint8Array

  private readonly cache64 = new Map<number, [number, number]>()

  constructor() {
    this.view = new DataView(new ArrayBuffer(BUF_INITIAL_SIZE))
    this.buffer = new Uint8Array(this.view.buffer)
    this.offset = 0
  }

  bytes() {
    return this.buffer.slice(0, this.offset)
  }

  bytesRef() {
    return this.buffer.subarray(0, this.offset)
  }

  resetOffset() {
    this.offset = 0
  }

  batch(values: ArrayLike<number>) {
    const size = values.length
    this.ensureSize(size)
    this.buffer.set(values, this.offset)
    this.offset += size
    return this
  }

  u8(i: number) {
    this.ensureSize(1)
    this.view.setUint8(this.offset, i)
    this.offset++
    return this
  }

  i8(i: number) {
    this.ensureSize(1)
    this.view.setInt8(this.offset, i)
    this.offset++
    return this
  }

  u16(i: number) {
    this.ensureSize(2)
    this.view.setUint16(this.offset, i)
    this.offset += 2
    return this
  }

  i16(i: number) {
    this.ensureSize(2)
    this.view.setInt16(this.offset, i)
    this.offset += 2
    return this
  }

  u32(i: number) {
    this.ensureSize(4)
    this.view.setUint32(this.offset, i)
    this.offset += 4
    return this
  }

  i32(i: number) {
    this.ensureSize(4)
    this.view.setInt32(this.offset, i)
    this.offset += 4
    return this
  }

  u64(i: number) {
    this.ensureSize(8)

    let hi: number
    let lo: number

    if (this.cache64.has(i)) {
      ;[hi, lo] = this.cache64.get(i)
    } else {
      hi = i / 4_294_967_296
      lo = i

      this.cache64.set(i, [hi, lo])
    }

    this.u32(hi)
    this.u32(lo)

    return this
  }

  i64(i: number) {
    this.ensureSize(8)

    let hi: number
    let lo: number

    if (this.cache64.has(i)) {
      ;[hi, lo] = this.cache64.get(i)
    } else {
      hi = Math.floor(i / 4_294_967_296)
      lo = i

      this.cache64.set(i, [hi, lo])
    }

    this.u32(hi)
    this.u32(lo)

    return this
  }

  f32(f: number) {
    this.ensureSize(4)
    this.view.setFloat32(this.offset, f)
    this.offset += 4
    return this
  }

  f64(f: number) {
    this.ensureSize(8)
    this.view.setFloat64(this.offset, f)
    this.offset += 8
    return this
  }

  private ensureSize(size: number) {
    const needed = this.offset + size

    if (this.view.byteLength < needed) {
      this.resize(needed * 2)
    }
  }

  private resize(size: number) {
    const array = new ArrayBuffer(size)
    const view = new DataView(array)
    const buffer = new Uint8Array(array)

    buffer.set(this.buffer)

    this.view = view
    this.buffer = buffer
  }
}
