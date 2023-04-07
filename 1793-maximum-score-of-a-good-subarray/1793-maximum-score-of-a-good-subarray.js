/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  const n = nums.length;
  let [l, r, min, ans] = [k, k, nums[k], nums[k]];
  
  while (l > 0 || r < n - 1) {
    if (!l) r++;
    else if (r == n - 1) l--;
    else nums[l - 1] < nums[r + 1] ? r++ : l--;
    
    min = Math.min(min, nums[l], nums[r]);
    ans = Math.max(ans, min * (r - l + 1));
  }
  
  return ans;
};