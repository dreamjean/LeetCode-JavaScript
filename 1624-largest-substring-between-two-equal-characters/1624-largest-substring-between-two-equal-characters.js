/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const n = s.length;
  let max = -1;
  
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (s[i] === s[j]) max = Math.max(max, j - i - 1);
    }
  }
  
  return max;
};