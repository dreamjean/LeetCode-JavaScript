/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  const n = s1.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => new Array(n + 1)));
  
  for (let i = 0; i < n; ++i) 
    for (let j = 0; j < n; ++j)
      dp[i][j][1] = s1[i] === s2[j];
  
  
  for (let k = 2; k <= n; ++k) {
    for (let i = 0; i + k <= n; ++i) {
      for (let j = 0; j + k <= n; ++j) {        
          for (let p = 1; p < k && !dp[i][j][k]; ++p) {
            dp[i][j][k] = (dp[i][j][p] && dp[i + p][j + p][k - p]) || (dp[i][j + k - p][p] && dp[i + p][j][k - p]);
          }
        }
      
    }
  }
  
  return dp[0][0][n];
};
