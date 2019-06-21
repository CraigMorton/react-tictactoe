export function expectToExist(query, ...queryArgs) {
  expect(() => query(...queryArgs)).not.toThrow();
}

export function expectNotToExist(query, ...queryArgs) {
  expect(() => query(...queryArgs)).toThrow();
}
