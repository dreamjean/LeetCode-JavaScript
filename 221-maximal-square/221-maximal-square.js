/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let res = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }

  return res * res;
};
