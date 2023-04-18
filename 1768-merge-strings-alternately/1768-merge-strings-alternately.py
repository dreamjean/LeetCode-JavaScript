/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const [n1, n2] = [word1.length, word2.length];
  let ans = '';
  
  for (let i = 0; i < Math.max(n1, n2); i++) 
    ans += (word1[i] ?? '') + (word2[i] ?? '');
  
  return ans;
};