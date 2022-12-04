/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  
  if (sum % k || n < k) return false;
  
  const subSum = sum / k;
  const maxMask = 1 << n;
  const dp = new Array(maxMask).fill(-1);
  dp[0] = 0;
  
  for (let i = 0; i < maxMask; i++) {
    for (let j = 0; j < n; j++) {
      if (i >> j & 1) {
        const before = i & ~(1 << j);
        const currSum = nums[j] + dp[before];
        if (dp[before] >= 0 && currSum <= subSum) 
          dp[i] = currSum % subSum;
      }
    }
  }
  
  return dp[maxMask - 1] === 0;
};