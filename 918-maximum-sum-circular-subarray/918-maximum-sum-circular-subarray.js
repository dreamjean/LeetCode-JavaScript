/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let [curMax, max, curMin, min, sum] = [0, nums[0], 0, nums[0], 0];
  
  for (let num of nums) {
    sum += num;
    curMax = Math.max(num, curMax + num);
    max = Math.max(max, curMax);
    curMin = Math.min(num, curMin + num);
    min = Math.min(min, curMin)
  }
  
  return max > 0 ? Math.max(max, sum - min) : max;
};