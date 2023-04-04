/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
  const n = word.length;
  let [ans, count, j] = [0, 1, 0];
  
  for (let i = 1; i < n; i++) {
    if (word[i] < word[i - 1]) {
      count = 1;
      j = i;
    }
    else if (word[i] > word[i - 1]) count++;
    if (count === 5) ans = Math.max(ans, i - j + 1);
  }
  
  return ans;
};