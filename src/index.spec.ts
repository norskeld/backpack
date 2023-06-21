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
  })

  it('number', () => {
    backpack(0)
    backpack(42)
    backpack(4.2)
    backpack(-300)
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
  })

  it('object', () => {
    backpack({ hello: 'world' })
    backpack({ message: ['hello', 'world'] })
    backpack({ compact: true, schema: 0 })
  })
})
