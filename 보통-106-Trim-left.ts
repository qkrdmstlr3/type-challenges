// template literal을 사용해서 infer과 함께 걸러낼 수 있다
type TrimLeft<S extends string> = S extends `${' '|'\n'|'\t'}${infer K}`
  ? TrimLeft<K>
  : S
