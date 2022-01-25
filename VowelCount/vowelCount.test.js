const vowelCount = require('./vowelCount');

describe('vowelCount', () => {
    it('return number of vowels in a string', () => {
      const actual = vowelCount("abracadabra");
      const expected = 5;
      expect(actual).toEqual(expected);
    });
  });