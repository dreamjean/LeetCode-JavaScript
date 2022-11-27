/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => new Map());
  let ans = 0;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const cnt1 = dp[i].get(diff) || 0;
      const cnt2 = dp[j].get(diff) || 0;
      dp[i].set(diff, cnt1 + cnt2 + 1);
      ans += cnt2;
    }
  }
  
  return ans;
};