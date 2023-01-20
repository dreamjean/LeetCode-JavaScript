/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
  const dp = [1, 0, 1];
  
  for (let num of obstacles) {
    if (num) dp[num - 1] = Infinity;
    
    for (let i = 0; i < 3; i++) {
      if (i + 1 === num) continue;
      
      dp[i] = Math.min(dp[i], dp[(i + 1) % 3] + 1, dp[(i + 2) % 3] + 1);
    }
  }
  
  return Math.min(...dp);
};