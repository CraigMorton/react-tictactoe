export function expectToExist(query, ...queryArgs) {
  expect(() => query(...queryArgs)).not.toThrow();
}
