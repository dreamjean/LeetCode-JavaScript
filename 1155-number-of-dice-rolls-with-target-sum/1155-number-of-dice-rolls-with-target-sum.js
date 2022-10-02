/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  const MOD = 1e9 + 7;
  let arr = new Array(k).fill(1);
  let depth = n;
  
  if (n > target || n * k < target) return 0;
  
  while (depth > 1) {
    const row = [];
    for (let i = 0; i < arr.length + k - 1 && i <= target - n; i++) {
      let val = ((row[i - 1] || 0) + (arr[i] || 0) - (arr[i - k] || 0)) % MOD;
      row.push(val);
    }
    
    arr = row;
    depth--;
  }
  
  let ans = arr[target - n];
  
  return ans < 0 ? ans + MOD : ans;
};