/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const mod = 1e9 + 7;
  let [power, ans] = [1, 0];
  
  for (let i = 0; i < n; i++) {
    ans = (ans + power * (nums[i] - nums[n - 1 - i])) % mod;
    power = power * 2 % mod;
  }
  
  return (ans + mod) % mod;
};