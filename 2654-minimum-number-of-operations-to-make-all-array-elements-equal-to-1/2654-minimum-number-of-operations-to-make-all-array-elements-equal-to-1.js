/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const n = nums.length;
  const ones = nums.reduce((acc, num) => acc + +(num === 1), 0);
  
  if (ones) return n - ones;
  
  let diff = n;
  
  for (let i = 0; i < n; i++) {
    let g = nums[i];
    for (let j = i + 1; j < n; j++) {
      g = gcd(g, nums[j]);
      if (g === 1) {
        diff = Math.min(diff, j - i);
        break;
      }
    }
  }
  
  return diff === n ? -1 : diff + n - 1;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));