/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const [m, n] = [s.length, t.length];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i <= m; i++) {
    for (let j = n; j > 0; j--) {
      dp[j] += s[i - 1] === t[j - 1] ? dp[j - 1] : 0;
    }
  }
  
  return dp[n];
};