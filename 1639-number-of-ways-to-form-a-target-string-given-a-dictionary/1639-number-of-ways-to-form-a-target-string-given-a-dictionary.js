/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const [m, n, t, mod] = [words.length, words[0].length, target.length, 1e9 + 7];
  const a = 'a'.charCodeAt();  
  const dp = new Array(t + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 0; i < n; i++) {
    const count = new Array(26).fill(0);
    for (let word of words)
      count[word.charCodeAt(i) - a]++;
    
    for (let j = Math.min(i + 1, t); j > 0; j--) 
      dp[j] = (dp[j] + count[target.charCodeAt(j - 1) - a] * dp[j - 1]) % mod;
  }
  
  return dp[t];
};