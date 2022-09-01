/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const dp = new Array(query_row + 2).fill(0);
  dp[0] = poured;
  
  for (let i = 1; i <= query_row; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j] = Math.max(0, (dp[j] - 1) / 2);
      dp[j + 1] += dp[j];
    }
  }
  
  return Math.min(1, dp[query_glass]);
};