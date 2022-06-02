// extends로 중복 제거
type MyExclude<T, U> = T extends U ? never : T
