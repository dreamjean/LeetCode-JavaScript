/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const [m, n] = [word1.length, word2.length];
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) dp[i][0] = i;
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i + 1][j + 1] = Math.min(dp[i + 1][j] + 1, dp[i][j + 1] + 1, dp[i][j] + (word1[i] !== word2[j]));
    }
  }
  
  return dp[m][n]
};