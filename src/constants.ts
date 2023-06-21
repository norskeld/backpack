/**
 * BackPack types.
 *
 * Note: This enum doesn't include some of the fix* types, sine they are actually ranges:
 *
 * ```
 * pos fixint: 0x00 -- 0x7f
 * fixmap:     0x80 -- 0x8f
 * fixarray:   0x90 -- 0x9f
 * fixstr:     0xa0 -- 0xbf
 * neg fixint: 0xe0 -- 0xff
 * ```
 */
export const enum Type {
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
