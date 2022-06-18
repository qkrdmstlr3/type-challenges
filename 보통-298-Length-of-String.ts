type LengthOfString<S extends string, T extends any[] = []> = S extends ''
  ? T['length']
  : S extends `${infer J}${infer K}`
    ? LengthOfString<K, [...T, J]>
    : never
