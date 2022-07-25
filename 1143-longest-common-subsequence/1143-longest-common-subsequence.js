/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const [m, n] = [text1.length, text2.length];
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++)
    for (j = 0; j < n; j++)
      dp[i + 1][j + 1] = Math.max(
        dp[i + 1][j],
        dp[i][j + 1],
        dp[i][j] + +(text1[i] === text2[j])
      );

  return dp[m][n];
};
