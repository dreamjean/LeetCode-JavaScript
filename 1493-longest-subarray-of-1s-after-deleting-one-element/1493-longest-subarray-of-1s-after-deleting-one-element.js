/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const n = nums.length; 
  let [l, r, count0, ans] = [0, 0, 0, 0];
  
  while (r < n) {
    if (!nums[r]) count0++;
    while (l < r && count0 > 1) {
      if (!nums[l++]) count0--;
    }
    
    ans = Math.max(ans, r - l);
    r++;
  }
  
  return ans;
};