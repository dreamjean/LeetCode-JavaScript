/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let [currMax, max, currMin, min, total] = [0, nums[0], 0, nums[0], 0];
  
  for (let num of nums) {
    currMax = Math.max(num, currMax + num);
    max = Math.max(max, currMax);
    currMin = Math.min(num, currMin + num);
    min = Math.min(min, currMin);
    total += num;
  }
  
  return max > 0 ? Math.max(max, total - min) : max;
};