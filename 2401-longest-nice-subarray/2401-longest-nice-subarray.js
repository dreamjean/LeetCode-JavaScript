/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
  let [l, r, used, ans] = [0, 0, 0, 0];
  
  while (r < nums.length) {
    while (used & nums[r]) used ^= nums[l++];
    
    ans = Math.max(ans, r - l + 1);
    used |= nums[r++];
  }
  
  return ans;
};