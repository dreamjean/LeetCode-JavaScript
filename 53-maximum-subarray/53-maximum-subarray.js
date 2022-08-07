/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let [sum, max] = [-Infinity, -Infinity];
  
  for (let num of nums) {
    sum = Math.max(num, num + sum);
    max = Math.max(max, sum);
  }
  
  return max;
};