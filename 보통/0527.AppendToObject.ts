// | 연산자를 통해서 묶을 수 있다
type AppendToObject<T, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};
