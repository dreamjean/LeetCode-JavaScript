/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  let [ans, lo, hi] = [0, -1, -1];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) lo = i;
    if (nums[i] >= left) hi = i;
    
    ans += hi - lo;
  }
  
  return ans;
};