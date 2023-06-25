export class SerializationError extends Error {
  constructor(message: string) {
    super(`SerializationError: ${message}`)
  }
}

export class DeserializationError extends Error {
  constructor(message: string) {
    super(`DeserializationError: ${message}`)
  }
}
