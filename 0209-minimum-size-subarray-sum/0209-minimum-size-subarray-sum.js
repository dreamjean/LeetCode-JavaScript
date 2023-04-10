/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length;
  let [l, r, ans] = [0, 0, n + 1];
  
  while (r < n) {
    target -= nums[r];
    while (target <= 0) {
      ans = Math.min(ans, r - l + 1);
      target += nums[l++];
    }
    
    r++;
  }
  
  return ans <= n ? ans : 0;
};