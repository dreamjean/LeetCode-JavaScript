/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
  const pos = nums.map((_, i) => i).sort((a, b) => nums[a] - nums[b]);
  const n = nums.length;
  let ans = n;
  
  for (let i = 1; i < n; i++) {
    if (pos[i] < pos[i - 1]) ans += n - i;
  }
    
  return ans;
};