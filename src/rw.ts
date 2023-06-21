const BUF_SIZE_INITIAL = 64
const BUF_SIZE_NORMAL = 1024

export class BytesBuilder {
  private chunks: Uint8Array[] = []

  /** Indicates whether the builder has any byte chunks stored. */
  get isEmpty() {
    return this.chunks.length === 0
  }

  /** Adds a new chunk of bytes to the builder. */
  add(bytes: Uint8Array | number[]): void {
    const chunk = new Uint8Array(bytes)

    this.chunks.push(chunk)
  }

  /** Retrieves the accumulated bytes from the builder as a single {@link Uint8Array}. */
  takeBytes(): Uint8Array {
    let length = 0
    let offset = 0

    for (const chunk of this.chunks) {
      length += chunk.length
    }

    const result = new Uint8Array(length)

    for (const chunk of this.chunks) {
      result.set(chunk, offset)
      offset += chunk.length
    }

    this.chunks = []

    return result
  }
}

export class DataReader {
  private readonly view: DataView
  private readonly buffer: Uint8Array
  private ptr: number

  get offset() {
    return this.ptr
  }

  constructor(data: Uint8Array) {
    this.view = new DataView(data.buffer, data.byteOffset)
    this.buffer = data
    this.ptr = 0
  }

  readI8(): number {
    return this.view.getInt8(this.ptr++)
  }

  readU8(): number {
    return this.view.getUint8(this.ptr++)
  }

  readU16(): number {
    const res = this.view.getUint16(this.ptr)
    this.ptr += 2
    return res
  }

  readI16(): number {
    const res = this.view.getInt16(this.ptr)
    this.ptr += 2
    return res
  }

  readU32(): number {
    const res = this.view.getUint32(this.ptr)
    this.ptr += 4
    return res
  }

  readI32(): number {
    const res = this.view.getInt32(this.ptr)
    this.ptr += 4
    return res
  }

  readU64(): number {
    const res = this.view.getBigUint64(this.ptr)
    this.ptr += 8
    return Number(res)
  }

  readI64(): number {
    const res = this.view.getBigInt64(this.ptr)
    this.ptr += 8
    return Number(res)
  }

  readF32(): number {
    const res = this.view.getFloat32(this.ptr)
    this.ptr += 4
    return res
  }

  readF64(): number {
    const res = this.view.getFloat64(this.ptr)
    this.ptr += 8
    return res
  }

  readBuffer(): number {
    return this.buffer[this.ptr++]
  }

  readRange(length: number): Uint8Array {
    const res = this.buffer.subarray(this.ptr, this.ptr + length)
    this.ptr += length
    return res
  }
}

export class DataWriter {
  private view: DataView | null
  private buffer: Uint8Array | null
  private bufferPtr: number
  private builder: BytesBuilder

  constructor(builder: BytesBuilder) {
    this.view = null
    this.buffer = null
    this.bufferPtr = 0
    this.builder = builder
  }

  writeU8(i: number): this {
    this.ensureSize(1)
    this.view?.setUint8(this.bufferPtr, i)
    this.bufferPtr += 1
    return this
  }

  writeI8(i: number): this {
    this.ensureSize(1)
    this.view?.setInt8(this.bufferPtr, i)
    this.bufferPtr += 1
    return this
  }

  writeU16(i: number): this {
    this.ensureSize(2)
    this.view?.setUint16(this.bufferPtr, i)
    this.bufferPtr += 2
    return this
  }

  writeI16(i: number): this {
    this.ensureSize(2)
    this.view?.setInt16(this.bufferPtr, i)
    this.bufferPtr += 2
    return this
  }

  writeU32(i: number): this {
    this.ensureSize(4)
    this.view?.setUint32(this.bufferPtr, i)
    this.bufferPtr += 4
    return this
  }

  writeI32(i: number): this {
    this.ensureSize(4)
    this.view?.setInt32(this.bufferPtr, i)
    this.bufferPtr += 4
    return this
  }

  writeU64(i: number): this {
    this.ensureSize(8)
    this.view?.setBigUint64(this.bufferPtr, BigInt(i))
    this.bufferPtr += 8
    return this
  }

  writeI64(i: number): this {
    this.ensureSize(8)
    this.view?.setBigInt64(this.bufferPtr, BigInt(i))
    this.bufferPtr += 8
    return this
  }

  writeF64(f: number): this {
    this.ensureSize(8)
    this.view?.setFloat64(this.bufferPtr, f)
    this.bufferPtr += 8
    return this
  }

  writeBytes(bytes: Uint8Array): this {
    const length = bytes.length

    if (length === 0) {
      return this
    }

    this.ensureSize(length)

    if (this.bufferPtr === 0) {
      this.builder.add(bytes)
    } else {
      this.buffer?.set(bytes, this.bufferPtr)
      this.bufferPtr += length
    }

    return this
  }

  /**
   * Retrieves the written bytes from the buffer. If there is an internal buffer, concatenates it
   * with the remaining bytes in the builder and returns the result.
   */
  takeBytes(): Uint8Array {
    if (this.buffer && this.builder.isEmpty) {
      // Creating a view of the the current buffer.
      const view = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, this.bufferPtr)

      this.bufferPtr = 0
      this.buffer = null
      this.view = null

      return view
    } else {
      this.appendBuffer()

      return this.builder.takeBytes()
    }
  }

  /**
   * Checks if the buffer has enough space to accommodate the specified size. If not, appends the
   * buffer and creates a new one.
   */
  private ensureSize(size: number): void {
    if (this.buffer === null) {
      this.buffer = new Uint8Array(BUF_SIZE_INITIAL)
      this.view = new DataView(this.buffer.buffer, this.buffer.byteOffset)
    }

    const remaining = this.buffer.length - this.bufferPtr

    if (remaining < size) {
      this.appendBuffer()
    }
  }

  /**
   * Appends the current buffer to the builder and creates a new buffer, resetting the pointer
   * (offset). If the builder is empty, it directly sets the builder to the current buffer.
   */
  private appendBuffer(): void {
    if (this.buffer && this.bufferPtr > 0) {
      const view = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, this.bufferPtr)

      if (this.builder.isEmpty) {
        this.builder.add(view)

        this.buffer = new Uint8Array(BUF_SIZE_NORMAL)
        this.view = new DataView(this.buffer.buffer, this.buffer.byteOffset)
      } else {
        this.builder.add(view)
      }

      this.bufferPtr = 0
    }
  }
}
