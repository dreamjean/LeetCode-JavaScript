/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length;
  let [diff, cnt, ans] = [nums[1] - nums[0], 0, 0];
  
  for (let i = 2; i < n; i++) {
    const currDiff = nums[i] - nums[i - 1];
    currDiff === diff ? ans += ++cnt : [diff, cnt] = [currDiff, 0];
  }
  
  return ans;
};