type Absolute<T extends number | string | bigint> = `${T}` extends `${infer First}${infer Rest}`
  ? First extends '-'
    ? `${Rest}`
    : `${T}`
  : never
  
// -를 추론에 넣는 방법으로 간소화 가능
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer J}` ? J : `${T}`
