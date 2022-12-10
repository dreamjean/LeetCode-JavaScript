/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let ans = 0;
  
  for (let i = 1; i < nums.length; i++) {
    const [prev, curr] = [nums[i - 1], nums[i]];
    if (curr <= prev) {
      ans += prev + 1 - curr;
      nums[i] = prev + 1;
    }
  }
  
  return ans;
};