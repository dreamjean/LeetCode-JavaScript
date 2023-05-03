/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  return (Math.max(...nums) * 2 + k - 1) * k / 2;
};