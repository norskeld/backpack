/**
 * **BackPack formats**
 *
 * This enum doesn't include some of the fix* types, since they encode range of values:
 *
 * ```
 * pos fixint: 0x00 -- 0x7f
 * fixmap:     0x80 -- 0x8f
 * fixarray:   0x90 -- 0x9f
 * fixstr:     0xa0 -- 0xbf
 * neg fixint: 0xe0 -- 0xff
 * ```
 */
export const enum Format {
  Nil = 0xc0,

  False = 0xc2,
  True = 0xc3,

  Bin8 = 0xc4,
  Bin16 = 0xc5,
  Bin32 = 0xc6,

  Ext8 = 0xc7,
  Ext16 = 0xc8,
  Ext32 = 0xc9,

  Float32 = 0xca,
  Float64 = 0xcb,

  Uint8 = 0xcc,
  Uint16 = 0xcd,
  Uint32 = 0xce,
  Uint64 = 0xcf,

  Int8 = 0xd0,
  Int16 = 0xd1,
  Int32 = 0xd2,
  Int64 = 0xd3,

  Str8 = 0xd9,
  Str16 = 0xda,
  Str32 = 0xdb,

  Array16 = 0xdc,
  Array32 = 0xdd,

  Map16 = 0xde,
  Map32 = 0xdf,

  // Masks for fixed types.

  FixMap = 0x80,
  FixArray = 0x90,
  FixStr = 0xa0,

  FixExt1 = 0xd4,
  FixExt2 = 0xd5,
  FixExt4 = 0xd6,
  FixExt8 = 0xd7,
  FixExt16 = 0xd8
}

/** Built-in BackPack extensions. */
export const enum Extension {
  /**
   * [Specification extension][spec-timestamp] for serializing/deserializing {@link Date} objects.
   *
   * [spec-timestamp]: https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
   */
  Timestamp = -1,

  /**
   * Built-in extension for "compressing" repeating string data.
   *
   * Works by replacing short (4-16 bytes) repeating strings and property names with 1-2 bytes long
   * monotonically increasing ids (references), which will be replaced back with associated strings
   * when deserializing.
   *
   * ### Formats
   *
   * - 8-bit
   * - 16-bit
   *
   * Each represents references of (2^N)-1 at most, where N is the number of format's bits.
   */
  Ref = -128,

  /**
   * Built-in extension for serializing/deserializing JavaScript {@link Map}. This is **not** the
   * same map defined in the [MessagePack specification][spec-map].
   *
   * ### Formats
   *
   * - 8-bit
   * - 16-bit
   * - 32-bit
   *
   * Each represents maps with (2^N)-1 entries at most, where N is the number of format's bits.
   *
   * [spec-map]: https://github.com/msgpack/msgpack/blob/master/spec.md#map-format-family
   */
  Map = -127
}
