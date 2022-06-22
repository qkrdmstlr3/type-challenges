type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer K}` | `${infer K}${' ' | '\n' | '\t'}`
  ? Trim<K>
  : S
