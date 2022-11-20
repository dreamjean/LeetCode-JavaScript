/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const dp = new Array(query_row + 1).fill(0);
  dp[0] = poured;
  
  for (let row = 1; row <= query_row; row++) {
    for (let i = row; i >= 0; i--) {
      dp[i] = Math.max(0, (dp[i] - 1) / 2);
      dp[i + 1] += dp[i];
    }
  }
  
  return Math.min(1, dp[query_glass]);
};