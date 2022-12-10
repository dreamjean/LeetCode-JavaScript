/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
  cuboids.forEach((cuboid) => cuboid.sort((a, b) => a - b));
  cuboids.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    if (a[1] !== b[1]) return b[1] - a[1];
    return b[2] - a[2];
  })
  
  const n = cuboids.length;
  const dp = new Array(n).fill(0);
  let ans = 0;
  
  for (let i = 0; i < n; i++) {
    const [curA, curB, curC] = cuboids[i];
    dp[i] = curC;
    
    for (let j = 0; j < i; j++) {
      const [preA, preB, preC] = cuboids[j];
      if (preA >= curA && preB >= curB && preC >= curC) {
        dp[i] = Math.max(dp[i], dp[j] + curC);
      }
    }
    
    ans = Math.max(ans, dp[i]);
  }
  
  return ans;
};