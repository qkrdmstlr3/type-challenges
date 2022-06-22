type MyOmit<T, K extends keyof T> = {[key in Exclude<keyof T, K>]: T[key]}
