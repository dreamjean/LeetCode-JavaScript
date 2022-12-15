/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  const sum = nums.reduce((a, b) => a + b);
  const diff = Math.abs(goal - sum);
  
  return Math.ceil(diff / limit);
};