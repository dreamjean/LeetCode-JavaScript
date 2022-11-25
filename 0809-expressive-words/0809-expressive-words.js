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
    else if (
      (i > 0 && s[i - 1] === s[i] && s[i] === s[i + 1]) ||
      (i > 1 && s[i - 2] === s[i] && s[i - 1] === s[i])
    ) i++;
    
    else return false;
  }

  return j === n;
}