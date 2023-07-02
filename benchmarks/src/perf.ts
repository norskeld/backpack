import { suite, add, cycle, complete } from 'benny'
import * as msgpack from '@msgpack/msgpack'
import * as msgpackr from 'msgpackr'

import { deserialize, serialize } from '@lib'

import { createFakeUser } from './data/faker'

const sm = createFakeUser(50)

suite(
  'Serialize',

  add('BackPack', () => serialize(sm)),
  add('MessagePack (@msgpack/msgpack)', () => msgpack.encode(sm)),
  add('MessagePack (msgpackr)', () => msgpackr.pack(sm)),
  add('JSON.stringify', () => JSON.stringify(sm)),

  cycle(),
  complete()
)

suite(
  'Deserialize',

  add('BackPack', () => {
    const se = serialize(sm)
    return () => deserialize(se)
  }),

  add('MessagePack (@msgpack/msgpack)', () => {
    const se = msgpack.encode(sm)
    return () => msgpack.decode(se)
  }),

  add('MessagePack (msgpackr)', () => {
    const se = msgpackr.pack(sm)
    return () => msgpackr.unpack(se)
  }),

  add('JSON.parse', () => {
    const se = JSON.stringify(sm)
    return () => JSON.parse(se)
  }),

  cycle(),
  complete()
)
