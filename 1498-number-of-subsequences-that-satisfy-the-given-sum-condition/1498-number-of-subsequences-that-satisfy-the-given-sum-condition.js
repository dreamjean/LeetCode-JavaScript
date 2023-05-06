/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  nums.sort((a, b) => a - b);
  const [n, mod] = [nums.length, 10 ** 9 + 7];
  const pows = new Array(n).fill(0);
  let [l, r, ans] = [0, n - 1, 0];
  pows[0] = 1;
  
  for (let i = 1; i < n; i++) pows[i] = (pows[i - 1] * 2) % mod;
  
  while (l <= r) {
    if (nums[r] + nums[l] > target) r--;
    else ans = (ans + pows[r - l++]) % mod;
  }
  
  return ans;
};