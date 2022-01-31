const filterNums = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (typeof num === 'number') {
      newArr.push(num);
    }
  }
  return newArr;
};

module.exports = filterNums;
