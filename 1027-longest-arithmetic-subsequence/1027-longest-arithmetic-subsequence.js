/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => new Map());
  let ans = 0;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      dp[i].set(diff, (dp[j].get(diff) || 1) + 1);
      ans = Math.max(ans, dp[i].get(diff));
    }
  }
  
  return ans;
};