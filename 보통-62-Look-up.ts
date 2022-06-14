// U가 union타입일 경우 extends로 걸러낼 수 있다
type LookUp<U, T> = U extends { type: T } ? U : never;
