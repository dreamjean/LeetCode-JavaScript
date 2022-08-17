/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;

  return ((n * (n + 1)) >> 1) - nums.reduce((a, b) => a + b);
};
