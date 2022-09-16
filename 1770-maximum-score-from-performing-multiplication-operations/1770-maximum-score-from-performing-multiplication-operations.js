/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const [m, n] = [multipliers.length, nums.length];
  const dp = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let l = i; l >= 0; l--) {
      const r = n - 1 - (i - l);
      dp[l][i] = Math.max(
        nums[l] * multipliers[i] + dp[l + 1][i + 1],
        nums[r] * multipliers[i] + dp[l][i + 1]
      );
    }
  }

  return dp[0][0];
};
