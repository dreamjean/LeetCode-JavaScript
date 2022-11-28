/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  const sums = nums.reduce((acc, curr, i) => (acc.push(!i ? curr : (acc.at(-1) + curr)), acc), []);
  const dp = sums.map((sum, i) => !i ? sum : sum / (i + 1));
  const n = nums.length;
  
  for (let l = 1; l < k; l++) {
    for (let i = n - 1; i >= l; i--) {
      dp[i] = 0;
      for (let j = i - 1; j >= 0; j--) {
        const avgBefore = dp[j];
        const avgAfter = (sums[i] - sums[j]) / (i - j);
        dp[i] = Math.max(dp[i], avgBefore + avgAfter);
      }
    }
  }
  
  return dp[n - 1];
};