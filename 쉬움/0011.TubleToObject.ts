// T[number] 식으로 인덱스 지정이 가능
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
}
