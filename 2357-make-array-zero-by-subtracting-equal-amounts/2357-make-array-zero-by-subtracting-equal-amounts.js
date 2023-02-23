/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const set = new Set(nums.filter(num => num));
  
  return set.size;
};