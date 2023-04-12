/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  
  return nums.reduce((acc, num) => acc + Math.abs(nums[mid] - num), 0);
};