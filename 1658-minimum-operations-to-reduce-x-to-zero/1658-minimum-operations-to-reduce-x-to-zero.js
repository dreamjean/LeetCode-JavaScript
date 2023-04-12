/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  const n = nums.length;
  let sum = nums.reduce((a, b) => a + b) - x;
  let [j, window] = [0, -1];
  
  if (sum < 0) return -1;
  if (!sum) return n;
  
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
    while (sum < 0 && j < i) sum += nums[j++];
    
    if (!sum) window = Math.max(window, i - j + 1);
  }
  
  return window < 0 ? window : n - window;
};