/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  if (!k) return nums[0];
  if (k == 1) return nums[1] ?? -1;
  if (nums.length === 1 && (k & 1) > 0) return -1;
  
  return Math.max(...nums.slice(0, k - 1), nums[k] || 0);
};