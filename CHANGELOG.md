# 1.0.0 (2023-07-29)


### Bug Fixes

* partial fix for serializing dates ([eedae5e](https://github.com/norskeld/backpack/commit/eedae5e1a620dc166b4feee70d6d14a2dbbfc853))
* rewrite timestamp extension, fix reading/writing i64 and u64 ([8d1383b](https://github.com/norskeld/backpack/commit/8d1383b640ab4ebb45036f87aa393cc65131d0c6))
* **serializer:** clear refs before serializing ([1698a7c](https://github.com/norskeld/backpack/commit/1698a7c349035d665075c1f5a21c1be44222eff3))


### Features

* implement map extension ([2682c70](https://github.com/norskeld/backpack/commit/2682c703c99d62a6f007f9a6dccfff4155ec69b2))
* implement set extension ([9f3a4f6](https://github.com/norskeld/backpack/commit/9f3a4f6ce4fb75f6b9a5b624e0b04a1879807a5c))
* implement simple back-referencing system ([5ff5a91](https://github.com/norskeld/backpack/commit/5ff5a91100f80f2ef4eefea8255ddff24174073a))
* implement timestamp (date) extension ([9feda71](https://github.com/norskeld/backpack/commit/9feda7139a58210a6ae990ab0f02af71b6f8310b))
* initial implementation of the MessagePack spec ([be1a234](https://github.com/norskeld/backpack/commit/be1a234f9a16108bff84078e6d320244bc29e55f))


### Performance Improvements

* add custom unicode encoder/decoder, strings caching ([74c52c9](https://github.com/norskeld/backpack/commit/74c52c93661d7afb3392dd7142ad7f873bbb5ddb))
* avoid encoding strings qualified to be refs twice ([b7e5369](https://github.com/norskeld/backpack/commit/b7e53690b7aa2fc0ea9b8c0b86a6055c898d8663))
* improve `decodeUtf8` by reducing number of `String.fromCharCode` calls ([5db7311](https://github.com/norskeld/backpack/commit/5db7311ee9646174a5e43b0808eb0e6118018b50))
* improve deserialization ([e138aa9](https://github.com/norskeld/backpack/commit/e138aa92701d661bb0687f25a2bf5e0c52226bcc))
* remove `TextEncoder`/`TextDecoder` completely, minor adjustments ([4050337](https://github.com/norskeld/backpack/commit/4050337ec75c13f56f6fbe23e77cff520118ce1b))
* rewrite `DataWriter`, improve serialization ([f839dc9](https://github.com/norskeld/backpack/commit/f839dc9fcf2c183fd4a3f6d68993d5e13dd6c80b))
* use `Map.forEach` instead of `for..of` when encoding header ([2f21afe](https://github.com/norskeld/backpack/commit/2f21afe9638ae96825576e23c016ca402f670f34))
