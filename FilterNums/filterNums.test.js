const filterNums = require('./filterNums');

describe('filterNums', () => {
  it('return new array only including type number', () => {
    const actual = filterNums([1, 2, 'aasf', '1', '123', 123]);
    const expected = [1, 2, 123];
    expect(actual).toEqual(expected);
  });
});
