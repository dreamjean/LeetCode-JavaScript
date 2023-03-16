/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const kIndex = nums.indexOf(k);
  const map = {};
  let [ans, bal] = [0, 0];
  
  for (let i = kIndex; i < nums.length; i++) {
    const num = nums[i];
    bal += num === k ? 0 : num < k ? -1 : 1;
    map[bal] ? map[bal]++ : map[bal] = 1;
  }
  
  bal = 0;
  
  for (let i = kIndex; i >= 0; i--) {
    bal += nums[i] === k ? 0 : nums[i] < k ? -1 : 1;
    ans += (map[-bal] || 0) + (map[-bal + 1] || 0);
  }
  
  return ans;
};