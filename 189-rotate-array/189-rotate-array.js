/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  k %= n;
  
  reverse(0, n - 1, nums)
  reverse(0, k - 1, nums)
  reverse(k, n - 1, nums)
};

const reverse = (l, r, nums) => {
  while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]]
}