/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  const cnt = Array.from({ length: 26 }, () => new Array(26).fill(0));
  const a = 'a'.charCodeAt();
  let ans = 0;
  
  for (let word of words) {
    const x = word[0].charCodeAt() - a;
    const y = word[1].charCodeAt() - a;
    if (cnt[y][x]) {
      ans += 4;
      cnt[y][x]--;
    }
    else cnt[x][y]++;
  }
  
  for (let i = 0; i < 26; i++) {
    if (cnt[i][i]) {
      ans += 2;
      break;
    }
  }
  
  return ans;
};