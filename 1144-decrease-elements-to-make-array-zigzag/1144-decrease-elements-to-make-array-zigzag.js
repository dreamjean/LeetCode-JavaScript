/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  const sums = [0, 0];
  
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i - 1] ?? Infinity;
    const right = nums[i + 1] ?? Infinity;
    sums[i % 2] += Math.max(0, nums[i] - Math.min(left, right) + 1);
  }
  
  return Math.min(...sums);
};