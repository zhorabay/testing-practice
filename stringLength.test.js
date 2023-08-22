const stringLength = require('./stringLength');

describe('stringLength function', () => {
  it('should return the length of a valid string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('A')).toBe(1);
  });

  it('should throw an error for an empty string', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
  });

  it('should throw an error for a string longer than 10 characters', () => {
    expect(() => stringLength('ThisIsTooLong')).toThrow('String length must be between 1 and 10 characters.');
  });
});
