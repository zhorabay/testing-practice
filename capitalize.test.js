const capitalize = require('./capitalize');

test('capitalize function should capitalize the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});
