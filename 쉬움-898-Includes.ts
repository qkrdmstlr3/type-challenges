type Includes<T extends readonly any[], U> = T extends [infer P, ...infer K] 
  ? Equal<P, U> extends true
    ? true
    : Includes<K, U>
  : false
