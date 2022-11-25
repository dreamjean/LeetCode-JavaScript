/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {  
  return words.reduce((acc, word) => acc + check(s, word), 0);
};

const check = (s, word) => {  
  const [m, n] = [s.length, word.length];
  let [i, j] = [0, 0];

  while (i < m) {
    if (s[i] === word[j]) {
      i++;
      j++;
    }
    else {
      if (s[i] !== s[i - 1]) return false;
      
      let k = i;
      while (s[i] === s[k]) i++;
      
      if (i - k === 1 && s[k] !== s[k - 2]) return false;
    }
  }
  
  return j === n;
}