export function expectToExist(query, ...queryArgs) {
  expect(() => {
    const result = query(...queryArgs);
    if (result === null) {
      throw new Error('queryBy returned null, sought element does not exist');
    }
    const isArray = result instanceof Array;
    const isEmpty = result.length === 0;
    if (isArray && isEmpty) {
      throw new Error(
        'queryAllBy returned an empty array, sought elements do not exist',
      );
    }
  }).not.toThrow();
}
