export class UnicodeError extends Error {
  constructor(message: string) {
    super(`UnicodeError: ${message}`)
  }
}

const StringCache = new Map<string, Uint8Array>()

/** Encodes UTF-8 string into bytes. */
export function encodeUtf8(string: string) {
  if (StringCache.has(string)) {
    return StringCache.get(string)!
  }

  const length = string.length
  const codes = [] as Array<number>

  for (let pos = 0; pos !== length; pos++) {
    let code = string.charCodeAt(pos)

    if (code < 128) {
      codes.push(code)
      continue
    }

    if (code < 2048) {
      codes.push((code >> 6) | 192)
    } else {
      if (code > 0xd7ff && code < 0xdc00) {
        if (++pos >= length) {
          throw new UnicodeError('Incomplete surrogate pair.')
        }

        const codePair = string.charCodeAt(pos)

        if (codePair < 0xdc00 || codePair > 0xdfff) {
          throw new UnicodeError(
            `Second surrogate character 0x${codePair.toString(16)}' at '${pos}' is out of range.`
          )
        }

        code = 0x10000 + ((code & 0x03ff) << 10) + (codePair & 0x03ff)

        codes.push((code >> 18) | 240, ((code >> 12) & 63) | 128)
      } else {
        codes.push((code >> 12) | 224)
      }

      codes.push(((code >> 6) & 63) | 128)
    }

    codes.push((code & 63) | 128)
  }

  const bytes = new Uint8Array(codes)

  StringCache.set(string, bytes)

  return bytes
}

/** Decodes bytes into UTF-8 string. */
export function decodeUtf8(bytes: Uint8Array) {
  const length = bytes.length
  const codes: Array<number> = []

  let offset = 0

  while (offset < length) {
    let code = bytes[offset++]

    if (code > 127) {
      if (code > 191 && code < 224) {
        if (offset >= length) {
          throw new UnicodeError('Incomplete 2-byte sequence.')
        }

        code = ((code & 31) << 6) | (bytes[offset++] & 63)
      } else if (code > 223 && code < 240) {
        if (offset + 1 >= length) {
          throw new UnicodeError('Incomplete 3-byte sequence.')
        }

        code = ((code & 15) << 12) | ((bytes[offset++] & 63) << 6) | (bytes[offset++] & 63)
      } else if (code > 239 && code < 248) {
        if (offset + 2 >= length) {
          throw new UnicodeError('Incomplete 4-byte sequence.')
        }

        code =
          ((code & 7) << 18) |
          ((bytes[offset++] & 63) << 12) |
          ((bytes[offset++] & 63) << 6) |
          (bytes[offset++] & 63)
      } else {
        throw new UnicodeError(`Unknown multibyte 0x${code.toString(16)} at '${offset - 1}'.`)
      }
    }

    if (code <= 0xffff) {
      codes.push(code)
    } else if (code <= 0x10ffff) {
      code -= 0x10000

      const first = (code >> 10) | 0xd800
      const second = (code & 0x3ff) | 0xdc00

      codes.push(first, second)
    } else {
      throw new UnicodeError(`Codepoint 0x${code.toString(16)} exceeds UTF-16 range.`)
    }
  }

  return String.fromCharCode.apply(null, codes)
}
