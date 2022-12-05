/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const nums = word.split(/[a-z]+/);
  const set = new Set();
  
  for (let num of nums) {
    if (!num) continue;
    if (num.startsWith('0')) {
      let i = 0;
      while (num[i] === '0') i++;
      
      num = num.slice(i);
    }
    
    set.add(num);
  }
  
  return set.size;
};