export class UnicodeEncodingError extends Error {
  constructor(message: string) {
    super(`UnicodeEncodingError: ${message}`)
  }
}

export class UnicodeDecodingError extends Error {
  constructor(message: string) {
    super(`UnicodeDecodingError: ${message}`)
  }
}

const TEXT_ENCODER_THRESHOLD = 64
const TEXT_DECODER_THRESHOLD = 256

const SharedTextEncoder = new TextEncoder()
const SharedTextDecoder = new TextDecoder()

const StringCache = new Map<string, Uint8Array>()

/** Iterates over a string and returns its length in bytes. */
export function size(string: string): number {
  const chars = string.length

  let size = 0

  for (let index = 0; index < chars; index++) {
    const high = string.charCodeAt(index)

    switch (true) {
      case high < 0x0080: {
        size += 1
        break
      }

      case high < 0x0800: {
        size += 2
        break
      }

      case high < 0xd800: {
        size += 3
        break
      }

      case high < 0xdc00: {
        const low = string.charCodeAt(++index)

        if (index < chars && low >= 0xdc00 && low <= 0xdfff) {
          size += 4
          break
        } else {
          throw new Error('Malformed Unicode string with missing or invalid low surrogate.')
        }
      }

      case high < 0xe000: {
        throw new Error('Malformed Unicode string with invalid high surrogate.')
      }

      default: {
        size += 3
        break
      }
    }
  }

  return size
}

/** Encodes a string to UTF-8 bytes. */
export function encodeUtf8(s: string) {
  if (StringCache.has(s)) {
    return StringCache.get(s)!
  }

  const length = s.length

  const bytes = new Uint8Array(size(s))

  if (length > TEXT_ENCODER_THRESHOLD) {
    SharedTextEncoder.encodeInto(s, bytes)
    return bytes
  }

  let offset = 0

  for (let pos = 0; pos !== length; pos++) {
    let char = s.charCodeAt(pos)

    if (char < 128) {
      bytes[offset++] = char
      continue
    }

    if (char < 2048) {
      bytes[offset++] = (char >> 6) | 192
    } else {
      if (char > 0xd7ff && char < 0xdc00) {
        if (++pos >= length) {
          throw new UnicodeEncodingError('Incomplete surrogate pair.')
        }

        const otherChar = s.charCodeAt(pos)

        if (otherChar < 0xdc00 || otherChar > 0xdfff) {
          throw new UnicodeEncodingError(
            `Second surrogate character 0x${otherChar.toString(16)}' at '${pos}' ` +
              `is out of range.`
          )
        }

        char = 0x10000 + ((char & 0x03ff) << 10) + (otherChar & 0x03ff)
        bytes[offset++] = (char >> 18) | 240
        bytes[offset++] = ((char >> 12) & 63) | 128
      } else {
        bytes[offset++] = (char >> 12) | 224
      }

      bytes[offset++] = ((char >> 6) & 63) | 128
    }

    bytes[offset++] = (char & 63) | 128
  }

  StringCache.set(s, bytes)

  return bytes
}

/** Decodes a string from UTF-8 bytes. */
export function decodeUtf8(bytes: Uint8Array) {
  if (bytes.length > TEXT_DECODER_THRESHOLD) {
    return SharedTextDecoder.decode(bytes)
  }

  let offset = 0
  let result = ''

  const length = bytes.length

  while (offset < length) {
    let char = bytes[offset++]

    if (char > 127) {
      if (char > 191 && char < 224) {
        if (offset >= length) {
          throw new UnicodeDecodingError('Incomplete 2-byte sequence.')
        }

        char = ((char & 31) << 6) | (bytes[offset++] & 63)
      } else if (char > 223 && char < 240) {
        if (offset + 1 >= length) {
          throw new UnicodeDecodingError('Incomplete 3-byte sequence.')
        }

        char = ((char & 15) << 12) | ((bytes[offset++] & 63) << 6) | (bytes[offset++] & 63)
      } else if (char > 239 && char < 248) {
        if (offset + 2 >= length) {
          throw new UnicodeDecodingError('Incomplete 4-byte sequence.')
        }

        char =
          ((char & 7) << 18) |
          ((bytes[offset++] & 63) << 12) |
          ((bytes[offset++] & 63) << 6) |
          (bytes[offset++] & 63)
      } else {
        throw new UnicodeDecodingError(
          `Unknown multibyte 0x${char.toString(16)} at '${offset - 1}'.`
        )
      }
    }

    if (char <= 0xffff) {
      result += String.fromCharCode(char)
    } else if (char <= 0x10ffff) {
      char -= 0x10000
      result += String.fromCharCode((char >> 10) | 0xd800)
      result += String.fromCharCode((char & 0x3ff) | 0xdc00)
    } else {
      throw new UnicodeDecodingError(`Codepoint 0x${char.toString(16)} exceeds UTF-16 range.`)
    }
  }

  return result
}
