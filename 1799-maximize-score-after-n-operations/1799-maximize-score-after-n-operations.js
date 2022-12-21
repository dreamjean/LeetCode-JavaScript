/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const [m, n] = [nums.length, nums.length / 2];
  const memo = new Array(1 << m).fill(0);
  
  const dfs = (i = 1, mask = 0) => {
    if (i > n) return 0;
    if (memo[mask]) return memo[mask];
    
    let ans = 0;
    
    for (let j = 0; j < m; j++) {
      if ((mask >> j) & 1) continue;
      for (let k = j + 1; k < m; k++) {
        if ((mask >> k) & 1) continue;
        const newMask = mask | (1 << j) | (1 << k);
        const source = i * gcd(nums[j], nums[k]);
        ans = Math.max(ans, source, source + dfs(i + 1, newMask));
      }
    }
    
    return memo[mask] = ans;
  }
  
  return dfs();
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));