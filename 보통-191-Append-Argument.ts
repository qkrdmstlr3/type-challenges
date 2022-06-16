type AppendArgument<Fn, A> = Fn extends (...args: infer K) => infer P
  ? (...args: [...K, A]) => P
  : never
