type First<T extends any[]> = T extends [] ? never : T[0];
  
// 다른 사람 풀이
// infer을 사용해서 반대로 뒤집는 방법도 있다
type First<T extends any[]> = T extends [infer P, ...any] ? P : never;
