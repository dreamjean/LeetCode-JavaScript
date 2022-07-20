/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxPos) return false;

    maxPos = Math.max(maxPos, nums[i] + i);
  }

  return true;
};
