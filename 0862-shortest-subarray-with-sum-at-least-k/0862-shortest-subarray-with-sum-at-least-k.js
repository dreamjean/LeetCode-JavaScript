/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const stack = [];
  const n = nums.length;
  let [l, r, ans] = [0, -1, n + 1];
  
  for (let i = 0; i < nums.length; i++) {
    if (i) nums[i] += nums[i - 1];
    if (nums[i] >= k) ans = Math.min(ans, i + 1);
    
    while (l <= r && nums[i] - nums[stack[l]] >= k) 
      ans = Math.min(ans, i - stack[l++]);
    
    while (l <= r && nums[i] <= nums[stack[r]]) r--;
    
    stack[++r] = i;
  }
  
  return ans <= n ? ans : -1;
};