/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, (_, i) => i);
  
  for (let mid = 1; mid < n; mid++) {
    for (let start = mid, end = mid; start >= 0 && end < n && s[start] === s[end]; start--, end++) {
      const newCntEnd = !start ? 0 : dp[start - 1] + 1;
      dp[end] = Math.min(dp[end], newCntEnd);
    }
    
    for (let start = mid - 1, end = mid; start >= 0 && end < n && s[start] === s[end]; start--, end++) {
      const newCntEnd = !start ? 0 : dp[start - 1] + 1;
      dp[end] = Math.min(dp[end], newCntEnd);
    }
  }
  
  return dp[n - 1];
};