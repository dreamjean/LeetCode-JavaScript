/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const mod = 10 ** 9 + 7;
  const m = rollMax.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  dp[0][m] = 1;
  dp[1][m] = m;
  
  for (let j = 0; j < m; j++) dp[1][j] = 1;
  
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 1; k <= rollMax[j]; k++) {
        const d = i - k;
        if (d < 0) break;
        dp[i][j] += (dp[d][m] - dp[d][j]) % mod;
      }
    }
    
    dp[i][m] = dp[i].reduce((a, b) => a + b);
  }
  
  return dp[n][m] % mod;
};