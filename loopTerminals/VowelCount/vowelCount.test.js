const vowelCount = require('./vowelCount');

describe('reverseWords', () => {
    it('return number of vowels in a string', () => {
      const actual = vowelCount("abracadabra");
      const expected = 5;
      expect(actual).toEqual(expected);
    });
  });