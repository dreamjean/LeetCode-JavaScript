/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
  const [m, n] = [multipliers.length, nums.length];
  const dp = Array.from({ length: m }, () => new Array(m).fill(0));
  
  const dfs = (l = 0, i = 0) => {
    if (i === m) return 0;
    if (dp[l][i]) return dp[l][i];
    
    const pickLeft = dfs(l + 1, i + 1) + nums[l] * multipliers[i];
    const pickRight = dfs(l, i + 1) + nums[n - 1 - (i - l)] * multipliers[i];
    
    return dp[l][i] = Math.max(pickLeft, pickRight);
  }
  
  return dfs();
};