/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length;
  let [diff, count, res] = [nums[1] - nums[0], 0, 0];
  
  for (let i = 2; i < n; ++i) {
    const currDiff = nums[i] - nums[i - 1];
    currDiff === diff ? res += ++count : [diff, count] = [currDiff, 0];
  }
  
  return res;
};