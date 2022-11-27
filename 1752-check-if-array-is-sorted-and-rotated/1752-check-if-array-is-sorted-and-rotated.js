/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  const n = nums.length;
  
  return nums.reduce((acc, curr, i) => acc + (curr > nums[(i + 1) % n]), 0) <= 1;
};