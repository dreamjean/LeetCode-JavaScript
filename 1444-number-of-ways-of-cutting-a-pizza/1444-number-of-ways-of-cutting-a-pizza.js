/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  const [m, n, mod] = [pizza.length, pizza[0].length, 1e9 + 7];
  const sums = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  const dp = Array.from(
    { length: k},
    () => Array.from({ length: m }, () => new Array(n).fill(0))
  );
  
  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
        sums[i][j] = +(pizza[i][j] === 'A') + sums[i + 1][j] + sums[i][j + 1] - sums[i + 1][j + 1];
  
  for (let i = 0; i < m; i++) 
    for (let j = 0; j < n; j++) 
      dp[0][i][j] = +(sums[i][j] > 0);
  
  for (let remain = 1; remain < k; remain++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let val = 0;
        for (let nextI = i + 1; nextI < m; nextI++)
          if (sums[i][j] - sums[nextI][j] > 0)
            val += dp[remain - 1][nextI][j];
        for (let nextJ = j + 1; nextJ < n; nextJ++)
          if (sums[i][j] - sums[i][nextJ] > 0)
            val += dp[remain- 1][i][nextJ];
        dp[remain][i][j] = val % mod;
      }
    }
  }
  
  return dp[k - 1][0][0];
};