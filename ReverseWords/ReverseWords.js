const reverseWords = (str) => {
  let splitStr = str.split(" ");
  splitStr.reverse()
  let newStr = splitStr.join(" ")
  return newStr;
}

module.exports = reverseWords