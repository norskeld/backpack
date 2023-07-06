interface Map<K, V> {
  has<P extends K>(key: P): this is { get(key: P): V } & this
}
