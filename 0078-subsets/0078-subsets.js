/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const n = nums.length;
  const ans = [];
  
  for (let mask = 0; mask < 1 << n; mask++) {
    const sub = [];
    for (let j = 0; j < n; j++) {
      if (mask >> j & 1) sub.push(nums[j]); 
    }
    
    ans.push(sub);
  }
  
  return ans;
};