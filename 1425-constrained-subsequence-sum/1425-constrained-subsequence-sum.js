/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
  const queue = [];
  let [l, r, ans] = [0, -1, nums[0]];
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] += (l <= r ? nums[queue[l]] : 0);
    ans = Math.max(ans, nums[i]);
    while (l <= r && nums[queue[r]] <= nums[i]) r--;
    
    if (nums[i] > 0) queue[++r] = i;
    if (l <= r && i - queue[l] >= k) l++;
  }
  
  return ans;
};