/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  const set = new Set(nums);
  return nums.reduce((acc, curr) => (set.has(curr + diff) && set.has(curr + diff * 2) && ++acc, acc), 0);
};