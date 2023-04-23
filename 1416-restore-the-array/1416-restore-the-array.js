/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
  const n = s.length;
  const mod = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') continue;
    
    let num = 0;
    for (let j = i; j < n; j++) {
      num = num * 10 + +s[j];
      if (num > k) break;
      
      dp[j + 1] = (dp[j + 1] + dp[i]) % mod;
    }
  }
  
  return dp[n];
};