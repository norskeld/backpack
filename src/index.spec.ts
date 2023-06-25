import { describe, it, expect } from 'vitest'

import { serialize, deserialize } from './index'

describe('serialize/deserialize', () => {
  function backpack(input: unknown) {
    const serialized = serialize(input)
    const deserialized = deserialize(serialized)

    expect(deserialized).toStrictEqual(input)
  }

  it('string', () => {
    backpack('hello')
    backpack('привет')
    backpack('こんにちは世界！')
  })

  it('number', () => {
    backpack(0)
    backpack(42)
    backpack(-300)

    backpack(4.2)
    backpack(0.000042)

    backpack(0xff)
    backpack(0b101010)
  })

  it('boolean', () => {
    backpack(true)
    backpack(false)
  })

  it('null', () => {
    backpack(null)
  })

  it('array', () => {
    backpack([])
    backpack([42, 69])
    backpack(['hello', 'мир'])
    backpack([{ message: 'hello world' }, { message: 'bonjour sac à dos' }])
  })

  it('object', () => {
    backpack({ hello: 'world' })
    backpack({ message: ['hello', 'world'] })
    backpack({ compact: true, schema: 0 })
  })

  it('date', () => {
    backpack(new Date(2020, 2, 22))
  })
})
