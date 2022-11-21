/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  n = Math.ceil(n / 25);
  if (n >= 179) return 1;
  
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  dp[0][0] = 0.5;
  
  for (let i = 1; i <= n; ++i) dp[0][i] = 1;
  
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      const [a, b, c, d] = [
        dp[Math.max(0, i - 4)][j],
        dp[Math.max(0, i - 3)][Math.max(0, j - 1)],
        dp[Math.max(0, i - 2)][Math.max(0, j - 2)],
        dp[Math.max(0, i - 1)][Math.max(0, j - 3)],
      ];
      dp[i][j] = 0.25 * (a + b + c + d);
    }
  }
  
  return dp[n][n];
};