/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let [ans, sum] = [nums[0], nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
    sum = nums[i] > nums[i - 1] ? sum + nums[i] : nums[i];
    ans = Math.max(ans, sum);
  }
  
  return ans;
};