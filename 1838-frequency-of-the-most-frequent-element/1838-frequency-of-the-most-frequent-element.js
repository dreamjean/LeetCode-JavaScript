/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);  
  let [l, r, sum, ans] = [0, 0, 0, 0];
  
  while (r < nums.length) {
    sum += nums[r];
    while (sum + k < nums[r] * (r - l + 1)) 
      sum -= nums[l++];
    
    ans = Math.max(ans, r - l + 1);
    r++;
  }
  
  return ans;
};