/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let [l, r] = [0, 0];

  while (r < nums.length) {
    if (nums[l] && !nums[r]) l = r;
    if (!nums[l] && nums[r]) [nums[l++], nums[r]] = [nums[r], nums[l]];
    r++;
  }
};
