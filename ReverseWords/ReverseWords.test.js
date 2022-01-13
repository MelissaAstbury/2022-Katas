const reverseWords = require('./ReverseWords')

describe('reverseWords', () => {
  it('return the words in the sentence reversed', () => {
    const actual = reverseWords("hello world");
    const expected = "world hello";
    expect(actual).toEqual(expected);
  });
});