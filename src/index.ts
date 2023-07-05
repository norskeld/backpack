import { DataReader, DataWriter } from './io'
import { Deserializer } from './deserializer'
import { Serializer } from './serializer'

const SharedBodyWriter = new DataWriter()
const SharedHeaderWriter = new DataWriter()

const SharedSerializer = new Serializer({
  writers: {
    body: SharedBodyWriter,
    header: SharedHeaderWriter
  }
})

export function serialize(data: unknown): Uint8Array {
  return SharedSerializer.serialize(data)
}

export function deserialize<T = unknown>(data: Uint8Array): T {
  const reader = new DataReader(data)
  const deserializer = new Deserializer<T>(reader)

  return deserializer.deserialize()
}
