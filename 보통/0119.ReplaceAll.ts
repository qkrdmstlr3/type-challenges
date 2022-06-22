type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Front}${From}${infer Back}` | `${infer Front}${From}${infer Back}`
    ? `${Front}${To}${ReplaceAll<Back, From, To>}`
    : S
