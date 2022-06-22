type Pop<T extends any[]> = T extends [...infer P, unknown] ? P : never
