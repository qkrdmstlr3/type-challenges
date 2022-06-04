// spread연산자를 타입에 사용할 수 있다
type Concat<T extends any[], U extends any[]> = [...T, ...U]
