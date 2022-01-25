const vowelCount = (str) => {
    const vowels = ['a','e','i','o','u'];
    let vowelsCount = 0;
     
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])) {
         vowelsCount++;
      }
    };
    return vowelsCount;
}

module.exports = vowelCount;