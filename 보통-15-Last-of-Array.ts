type Last<T extends any[]> = T extends [infer P, ...infer K]
  ? K extends []
    ? P
    : Last<K>
  : never
