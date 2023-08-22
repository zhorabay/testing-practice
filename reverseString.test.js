const reverseString = require('./reverseString');

describe('reverseString function', () => {
  it('should reverse a string', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });

  it('should reverse an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('John Doe')).toBe('eoD nhoJ');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
  });
});
