/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxStep = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (maxStep < i) return false;
    
    maxStep = Math.max(maxStep, nums[i] + i);
  }
  
  return true;
};