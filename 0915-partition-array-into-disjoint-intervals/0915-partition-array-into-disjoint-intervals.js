/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let [leftMax, currMax, pivot] = [nums[0], nums[0], 0];

  for (let i = 1; i < nums.length; i++) {
    leftMax = Math.max(leftMax, nums[i]);
    if (currMax > nums[i]) {
      currMax = leftMax;
      pivot = i;
    }
  }

  return pivot + 1;
};
