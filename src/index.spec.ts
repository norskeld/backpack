import { describe, it, expect } from 'vitest'

import { serialize, deserialize } from './index'

describe('serialize/deserialize', () => {
  function backpack(input: unknown) {
    const serialized = serialize(input)
    const deserialized = deserialize(serialized)

    expect(input).toStrictEqual(deserialized)
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
    backpack(new Date(1920, 2, 22))
  })

  it('map', () => {
    backpack(
      new Map([
        ['hello', 42],
        ['blazing', 420],
        ['turning', 180],
        ['warhammer', 9000]
      ])
    )

    backpack({
      map: new Map([
        [42, 'is the meaning'],
        [420, 'is for blazing'],
        [69, 'is for pleasure'],
        [-1000, 'is for the account balance']
      ])
    })

    backpack([
      new Map([
        ['hello', { message: 'hello' }],
        ['bye', { message: 'bye' }]
      ]),
      new Map([
        [{ kind: 1 }, 'the first kind'],
        [{ kind: 2 }, 'the second kind']
      ])
    ])

    backpack(
      new Map([
        [20200220, new Date(2020, 1, 20)],
        [19901111, new Date(1990, 10, 11)]
      ])
    )
  })

  it('set', () => {
    backpack(new Set(['hello', 'the', 'new', 'world', 'order']))
  })
})
