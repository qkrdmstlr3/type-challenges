type DeepReadonly<T> = T extends {[key in keyof T]: T[key]} 
  ? T extends (...args: unknown[]) => unknown
    ? T
    : {readonly [key2 in keyof T] : DeepReadonly<T[key2]>}
  : never
