/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
  return nums.reduce((acc, curr) => acc ^= curr, 0);
};