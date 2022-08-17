/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = 1;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] || (!i && !j)) continue;
      
      dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0);
    }
  }
  
  return dp[m - 1][n - 1];
};