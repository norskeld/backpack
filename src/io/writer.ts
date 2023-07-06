const BUF_INITIAL_SIZE = 2048

export class DataWriter {
  private pos: number
  private view: DataView
  private array: Uint8Array

  private readonly cache64 = new Map<number, [number, number]>()

  constructor() {
    this.view = new DataView(new ArrayBuffer(BUF_INITIAL_SIZE))
    this.array = new Uint8Array(this.view.buffer)
    this.pos = 0
  }

  bytesRef() {
    return this.array.subarray(0, this.pos)
  }

  resetOffset() {
    this.pos = 0
  }

  u8(i: number) {
    this.ensureSize(1)
    this.view.setUint8(this.pos, i)
    this.pos++
    return this
  }

  i8(i: number) {
    this.ensureSize(1)
    this.view.setInt8(this.pos, i)
    this.pos++
    return this
  }

  u16(i: number) {
    this.ensureSize(2)
    this.view.setUint16(this.pos, i)
    this.pos += 2
    return this
  }

  i16(i: number) {
    this.ensureSize(2)
    this.view.setInt16(this.pos, i)
    this.pos += 2
    return this
  }

  u32(i: number) {
    this.ensureSize(4)
    this.view.setUint32(this.pos, i)
    this.pos += 4
    return this
  }

  i32(i: number) {
    this.ensureSize(4)
    this.view.setInt32(this.pos, i)
    this.pos += 4
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
    this.view.setFloat32(this.pos, f)
    this.pos += 4
    return this
  }

  f64(f: number) {
    this.ensureSize(8)
    this.view.setFloat64(this.pos, f)
    this.pos += 8
    return this
  }

  set(values: ArrayLike<number>) {
    const size = values.length
    this.ensureSize(size)
    this.array.set(values, this.pos)
    this.pos += size
    return this
  }

  private ensureSize(size: number) {
    const needed = this.pos + size

    if (this.view.byteLength < needed) {
      const buffer = new ArrayBuffer(needed * 2)
      const view = new DataView(buffer)
      const array = new Uint8Array(buffer)

      array.set(this.array)

      this.view = view
      this.array = array
    }
  }
}
