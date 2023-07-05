export class UnicodeError extends Error {
  constructor(message: string) {
    super(`UnicodeError: ${message}`)
  }
}

const StringCache = new Map<string, Uint8Array>()

/** Iterates over a string and returns its length in bytes. */
export function size(string: string): number {
  const chars = string.length

  let size = 0

  for (let pos = 0; pos < chars; pos++) {
    const high = string.charCodeAt(pos)

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
        const low = string.charCodeAt(++pos)

        if (pos < chars && low >= 0xdc00 && low <= 0xdfff) {
          size += 4
          break
        } else {
          throw new UnicodeError('Malformed Unicode string with missing or invalid low surrogate.')
        }
      }

      case high < 0xe000: {
        throw new UnicodeError('Malformed Unicode string with invalid high surrogate.')
      }

      default: {
        size += 3
        break
      }
    }
  }

  return size
}

/** Encodes UTF-8 string into bytes. */
export function encodeUtf8(string: string) {
  if (StringCache.has(string)) {
    return StringCache.get(string)!
  }

  const length = string.length
  const bytes = new Uint8Array(size(string))

  let offset = 0

  for (let pos = 0; pos !== length; pos++) {
    let char = string.charCodeAt(pos)

    if (char < 128) {
      bytes[offset++] = char
      continue
    }

    if (char < 2048) {
      bytes[offset++] = (char >> 6) | 192
    } else {
      if (char > 0xd7ff && char < 0xdc00) {
        if (++pos >= length) {
          throw new UnicodeError('Incomplete surrogate pair.')
        }

        const otherChar = string.charCodeAt(pos)

        if (otherChar < 0xdc00 || otherChar > 0xdfff) {
          throw new UnicodeError(
            `Second surrogate character 0x${otherChar.toString(16)}' at '${pos}' is out of range.`
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

  StringCache.set(string, bytes)

  return bytes
}

/** Decodes bytes into UTF-8 string. */
export function decodeUtf8(bytes: Uint8Array) {
  const length = bytes.length
  const chars: Array<number> = []

  let offset = 0

  while (offset < length) {
    let char = bytes[offset++]

    if (char > 127) {
      if (char > 191 && char < 224) {
        if (offset >= length) {
          throw new UnicodeError('Incomplete 2-byte sequence.')
        }

        char = ((char & 31) << 6) | (bytes[offset++] & 63)
      } else if (char > 223 && char < 240) {
        if (offset + 1 >= length) {
          throw new UnicodeError('Incomplete 3-byte sequence.')
        }

        char = ((char & 15) << 12) | ((bytes[offset++] & 63) << 6) | (bytes[offset++] & 63)
      } else if (char > 239 && char < 248) {
        if (offset + 2 >= length) {
          throw new UnicodeError('Incomplete 4-byte sequence.')
        }

        char =
          ((char & 7) << 18) |
          ((bytes[offset++] & 63) << 12) |
          ((bytes[offset++] & 63) << 6) |
          (bytes[offset++] & 63)
      } else {
        throw new UnicodeError(`Unknown multibyte 0x${char.toString(16)} at '${offset - 1}'.`)
      }
    }

    if (char <= 0xffff) {
      chars.push(char)
    } else if (char <= 0x10ffff) {
      char -= 0x10000

      const first = (char >> 10) | 0xd800
      const second = (char & 0x3ff) | 0xdc00

      chars.push(first, second)
    } else {
      throw new UnicodeError(`Codepoint 0x${char.toString(16)} exceeds UTF-16 range.`)
    }
  }

  return String.fromCharCode(...chars)
}
