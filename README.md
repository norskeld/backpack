# `⇋` backpack

<!-- [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@nrsk/backpack?style=flat-square&colorA=22272d&colorB=22272d&label=minzipped)](https://bundlephobia.com/package/@nrsk/backpack) -->
<!-- ![Tree Shaking](https://img.shields.io/static/v1?label=tree+shaking&message=✔&style=flat-square&colorA=22272d&colorB=22272d) -->

[![Build/Test](https://img.shields.io/github/actions/workflow/status/norskeld/backpack/test.yml?style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/backpack/actions 'Build and test workflows')
[![Coverage](https://img.shields.io/coverallsCoverage/github/norskeld/backpack?style=flat-square&colorA=22272d&colorB=22272d)](https://coveralls.io/github/norskeld/backpack 'Test coverage')
[![NPM](https://img.shields.io/npm/v/@nrsk/backpack?style=flat-square&colorA=22272d&colorB=22272d)](https://npm.im/@nrsk/backpack 'This package on NPM')
![Supported Node Versions](https://img.shields.io/node/v/%40nrsk/backpack?style=flat-square&colorA=22272d&colorB=22272d)
[![Semantic Release](https://img.shields.io/static/v1?label=semantic+release&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/semantic-release/semantic-release 'This package uses semantic release to handle releasing, versioning, changelog generation and tagging')
[![Conventional Commits](https://img.shields.io/static/v1?label=conventional+commits&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://conventionalcommits.org 'This package follows the conventional commits spec and guidelines')

MessagePack implementation with back-referencing extension.

## Features

> [!WARNING]
> This is mostly a learning project and—although it works—it is not ready to be used in production.

BackPack implements [MessagePack specification][messagepack-spec] and the following extensions:

- [x] [Timestamp extension][messagepack-timestamp-ext].
- [x] [Map] and [Set] extensions.
- [x] [Back-referencing](#back-referencing) extension.

BackPack does not depend on Node- or browser-specific APIs.

## Back-referencing

It's a really simple extension that instructs serializer to replace short repeating strings and property names with numeric ids (references) and keep a map of references to strings in the message header. When deserializing, it does the opposite: reads the message header and then replaces references with associated strings. This extension allows to shave off 20-30% from payload size.

### Notes

- References are implemented as extension formats, specifically **fixext1** and **fixext2**.

- There is a maximum number of references that can be safely stored: $2^{16} = 65536$. I don't think there is a point in storing 32 bit long references, since the overhead mostly makes the whole approach non-viable.

- Right now all strings that are 2-16 ~~bytes~~ characters long get turned into references. Turning into references _only duplicated_ strings would make gains even more noticeable, but it's not an easy feat.

## Usage

Doesn't get any simpler than this:

```typescript
import { serialize, deserialize } from '@nrsk/backpack'

const data = {
  /* ... */
}

const se = serialize(data)
const de = deserialize(se)
```

## Benchmarks

It's not fast, but not slow either, and performs mostly on par with the official JS implementation while producing smaller outputs for the same inputs. Detailed benchmarks for both size and performance can be found [here](./benchmarks/README.md).

## Todo

This is mostly about public API:

- [ ] Add options:
  - [ ] Disable built-ins (default: `false`). If `true`, disables all built-in extensions;
  - [ ] Use Timestamp extension (default: `true`);
  - [ ] Use Reference extension (default: `true`);
  - [ ] Use Map extension (default: `true`);
  - [ ] Use Set extension (default: `true`);
  - [ ] Ignore `undefined` (default: `false`). If `false`, it will be encoded as `null`. Setting to `true` should theoretically allow one to implement a custom extension to encode `undefined` as a distinct format/type.
  - [ ] Throw on unknown data type (default: `true`). Setting to `false` will just ignore unknown data types and formats.
- [ ] Rewrite extension system.
- [ ] Add tests.

## License

[MIT](LICENSE).

<!-- Links. -->

[messagepack-spec]: https://github.com/msgpack/msgpack/blob/master/spec.md
[messagepack-timestamp-ext]: https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
