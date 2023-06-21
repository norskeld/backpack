import { BytesBuilder, DataReader, DataWriter } from './rw'
import { Deserializer } from './deserializer'
import { Serializer } from './serializer'

export function serialize(data: unknown): Uint8Array {
  const builder = new BytesBuilder()
  const writer = new DataWriter(builder)
  const serializer = new Serializer(writer)

  serializer.encode(data)

  return serializer.takeBytes()
}

export function deserialize<T = unknown>(data: Uint8Array): T {
  const reader = new DataReader(data)
  const deserializer = new Deserializer(reader)

  return deserializer.decode() as T
}
