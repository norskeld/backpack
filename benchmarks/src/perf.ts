import { suite, add, cycle, complete } from 'benny'
import { decode, encode } from '@msgpack/msgpack'

import { deserialize, serialize } from '@lib'

import { createFakeUser } from './data/faker'

const sm = createFakeUser(50)

suite(
  'Serialize',

  add('JSON.stringify', () => JSON.stringify(sm)),
  add('MessagePack', () => encode(sm)),
  add('BackPack', () => serialize(sm)),

  cycle(),
  complete()
)

suite(
  'Deserialize',

  add('JSON.parse', () => {
    const se = JSON.stringify(sm)
    return () => JSON.parse(se)
  }),

  add('MessagePack', () => {
    const se = encode(sm)
    return () => decode(se)
  }),

  add('BackPack', () => {
    const se = serialize(sm)
    return () => deserialize(se)
  }),

  cycle(),
  complete()
)
