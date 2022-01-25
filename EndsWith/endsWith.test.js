const endsWith = require('./endsWith');

describe('endsWith', () => {
    it('if string ends in ending return true', () => {
      const actual = endsWith("hello there", "ere");
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('if string does not end in ending return false', () => {
        const actual = endsWith("Good Morning", "Good");
        const expected = false;
        expect(actual).toEqual(expected);
      });
  });