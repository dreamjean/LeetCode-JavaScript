/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    let [currMax, maxSum] = [0, 0];
    for (let j = 1; j <= Math.min(k, i); j++) {
      currMax = Math.max(currMax, arr[i - j]);
      maxSum = Math.max(maxSum, dp[i - j] + currMax * j);
    }
    
    dp[i] = maxSum;
  }
  
  return dp[n];
};