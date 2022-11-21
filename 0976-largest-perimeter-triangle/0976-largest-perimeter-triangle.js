/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => b - a);
  
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] < nums[i - 1] + nums[i]) return nums[i - 2] + nums[i - 1] + nums[i];
  }
  
  return 0;
};