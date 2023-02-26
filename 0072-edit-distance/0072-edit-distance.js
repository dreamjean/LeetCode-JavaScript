/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const [n1, n2] = [word1.length, word2.length];
  const dp = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(0));
  
  for (let i = 1; i <= n1; i++) dp[i][0] = i;
  for (let j = 1; j <= n2; j++) dp[0][j] = j;
  
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, 
        dp[i][j - 1] + 1, 
        dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1])
      );
    }
  }
  
  return dp[n1][n2];
};