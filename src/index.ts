import { Deserializer, DeserializerOptions, DeserializationError } from './deserializer'
import { Serializer, SerializerOptions, SerializationError } from './serializer'
import { DataReader, DataWriter } from './io'
import { Format, Extension } from './formats'

function serialize(data: unknown, options: SerializerOptions = {}): Uint8Array {
  const serializer = new Serializer(options)

  return serializer.serialize(data)
}

function deserialize<T = unknown>(data: Uint8Array, options: DeserializerOptions = {}): T {
  const deserializer = new Deserializer<T>(data, options)

  return deserializer.deserialize()
}

export {
  serialize,
  deserialize,
  Serializer,
  Deserializer,
  SerializationError,
  DeserializationError,
  DataReader,
  DataWriter,
  Format,
  Extension
}
