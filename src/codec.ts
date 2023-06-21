export interface ExtensionCodec {
  getType(data: unknown): number
  encode(data: unknown): Uint8Array
  decode(type: number, data: Uint8Array): unknown
}
