/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const [m, n] = [nums.length, nums.length / 2];
  const memo = new Array(1 << m).fill(0);
  
  const dfs = (i, mask) => {
    if (i > n) return 0;
    if (memo[mask]) return memo[mask];
    
    let ans = 0;
    for (let j = 0; j < m; j++){
      if ((mask >> j) & 1) continue;
      
      for (let k = j + 1; k < m; k++) {
        if ((mask >> k) & 1) continue;
        
        const source = i * gcd(nums[j], nums[k]);
        const newMask = mask | (1 << j) | (1 << k);
        ans = Math.max(ans, dfs(i + 1, newMask) + source);
      }
    }
    
    return memo[mask] = ans;
  }
  
  return dfs(1, 0);
};

const gcd = (a, b) => !b ? a : gcd(b, a % b);