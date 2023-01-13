/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
  const seen = new Set(nums);
  const max = Math.max(...seen);
  let ans = 0;

  for (i = 1; i <= max; i++) {
    let g = 0;
    for (let j = i; j <= max; j += i) {
      if (seen.has(j)) g = gcd(g, j);
      if (g === i) break;
    }
    
    if (g === i) ans++;
  }
  
  return ans;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));