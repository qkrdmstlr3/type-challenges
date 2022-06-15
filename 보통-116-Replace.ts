type Replace<S extends string, From extends string, To extends string> = S extends `${infer Front}${From}${infer Back}`
  ? From extends ''
    ? S
    : `${Front}${To}${Back}`
  : S
