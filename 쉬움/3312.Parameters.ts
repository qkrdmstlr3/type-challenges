type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer K) => any ? K : never
