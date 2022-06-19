type Flatten<T extends any[]> = T extends [infer J, ...infer K]
  ? J extends any[]
    ? [...Flatten<J>, ...Flatten<K>]
    : [J, ...Flatten<K>]
  : T
