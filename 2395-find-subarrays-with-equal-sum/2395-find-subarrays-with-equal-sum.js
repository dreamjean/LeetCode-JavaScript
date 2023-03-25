/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  const set = new Set();
  
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 1];
    if (set.has(sum)) return true;
    
    set.add(sum);
  }
  
  return false;
};