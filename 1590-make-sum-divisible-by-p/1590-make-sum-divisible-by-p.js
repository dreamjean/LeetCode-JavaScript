/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  const sum = nums.reduce((a, b) => a + b) % p;
  const map = { 0: -1};
  const n = nums.length;
  let [ans, curr] = [n, 0];
  
  if (!sum) return 0;
  
  nums.forEach((num, i) => {
    curr = (curr + num) % p;
    map[curr] = i;
    let preSum = (curr - sum + p) % p;
    if (preSum in map) ans = Math.min(ans, i - map[preSum]);
  })
  
  return ans < n ? ans : -1;
};
