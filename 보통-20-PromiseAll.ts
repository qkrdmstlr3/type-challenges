/*
 * PromiseAll에 generic을 사용함으로써 타입을 정의 가능
 * readonly 속성을 줌으로써 as const타입을 읽어올 수 있다
 */
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [key in keyof T]: T[key] extends Promise<infer K> ? K : T[key]
}>
  
const promiseAllTest1 = PromiseAll([1, 2, 3] as const) // Promise<[1, 2, 3]>
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const) // Promise<[1, 2, number]>
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]) // Promise<[number, number, number]>
