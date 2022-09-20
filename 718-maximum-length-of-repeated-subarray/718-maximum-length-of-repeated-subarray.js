/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const [m, n] = [nums1.length, nums2.length];
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let res = 0;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = nums1[i - 1] === nums2[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
      res = Math.max(res, dp[i][j]);
    }
  }
  
  return res;
};