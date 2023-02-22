/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const n = piles.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  
  for (let i = n - 2; i >= 0; i--)
    piles[i] += piles[i + 1];
  
  const solve = (i, m) => {
    if (n - i <= 2 * m) return piles[i];
    if (dp[i][m]) return dp[i][m];
    
    for (let x = 1; x <= 2 * m; x++)
      dp[i][m] = Math.max(dp[i][m], piles[i] - solve(i + x, Math.max(x, m)));
    
    return dp[i][m];
  }
  
  return solve(0, 1);
};

