/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = [];
  
  const backtract = (start = 0, sub = []) => {
    if (sub.length > 1) ans.push([...sub]);
    
    const set = new Set();
    for (let i = start; i < nums.length; i++) {
      if (set.has(nums[i]) || (sub.length && sub.at(-1) > nums[i])) continue;
      
      set.add(nums[i]);
      backtract(i + 1, [...sub, nums[i]]);
    }
  }
  
  backtract();
  
  return ans;
};