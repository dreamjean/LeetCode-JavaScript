/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    
    let [l, r] = [i + 1, n - 1];
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (!sum) {
        ans.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[++l]);
      }
      
      sum < 0 ? l++ : r--;
    }
  }
  
  return ans;
};