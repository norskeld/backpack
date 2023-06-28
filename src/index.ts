import { BytesBuilder, DataReader, DataWriter } from './rw'
import { Deserializer } from './deserializer'
import { Serializer } from './serializer'

export function serialize(data: unknown): Uint8Array {
  const builder = new BytesBuilder()
  const writer = new DataWriter(builder)
  const serializer = new Serializer(writer)

  serializer.encode(data)
  const body = serializer.take()

  serializer.encodeHeader()
  const header = serializer.take()

  const serialized = new Uint8Array(body.length + header.length)

  serialized.set(header)
  serialized.set(body, header.length)

  return serialized
}

export function deserialize<T = unknown>(data: Uint8Array): T {
  const reader = new DataReader(data)
  const deserializer = new Deserializer(reader)

  deserializer.decodeHeader()

  return deserializer.decode() as T
}
