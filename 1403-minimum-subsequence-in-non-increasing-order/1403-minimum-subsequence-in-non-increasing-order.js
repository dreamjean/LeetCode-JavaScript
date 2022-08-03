/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let right = nums.reduce((a, b) => a + b);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    if (right < left) return nums.slice(0, i + 1);
  }
};
