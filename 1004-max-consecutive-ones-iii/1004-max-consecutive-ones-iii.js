/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let [l, r] = [0, 0];
  
  while (r < nums.length) {
    if (!nums[r++]) k--;
    if (k < 0 && !nums[l++]) k++;
  }
  
  return r - l;
};