/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((a, b) => a + b);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    const right = sum - left - nums[i];
    if (right === left) return i;

    left += nums[i];
  }

  return -1;
};
