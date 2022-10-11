/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  const n = nums.length;
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    let [min, max] = [Infinity, -Infinity];
    for (let j = i; j < n; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      sum += max - min;
    }
  }
  
  return sum;
};