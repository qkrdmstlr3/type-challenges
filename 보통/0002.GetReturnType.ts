type MyReturnType<T> = T extends (...args: any[]) => infer K ? K : never;
