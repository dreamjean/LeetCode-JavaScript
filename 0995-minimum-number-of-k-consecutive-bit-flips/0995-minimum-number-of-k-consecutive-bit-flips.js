/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
  const n = nums.length; 
  let [fliped, ans] = [0, 0];
  
  for (let i = 0; i < n; i++) {
    if (i >= k && nums[i - k] > 1) fliped--;
    if (fliped % 2 === nums[i]) {
      if (i + k > n) return -1;
      
      nums[i] = 2;
      fliped++;
      ans++;
    }
  }
  
  return ans;
};