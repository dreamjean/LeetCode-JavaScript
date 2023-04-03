/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
  const n = stones.length;
  if ((n - 1) % (k - 1)) return -1;
  
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  const preSum = stones.reduce((acc, stone) => (acc.push(acc.at(-1) + stone), acc), [0]);
  
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = Infinity;
      for (let mid = i; mid < j; mid += k - 1) 
        dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);
      
      if ((j - i) % (k - 1) === 0)
        dp[i][j] += preSum[j + 1] - preSum[i];
    }
  }
  
  return dp[0][n - 1];
};