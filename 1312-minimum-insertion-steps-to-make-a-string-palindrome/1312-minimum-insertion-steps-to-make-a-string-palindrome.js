/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const n = s.length; 
  const dp = new Array(n).fill(0);
  
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = 1;
    let prev = 0;
    for (let j = i + 1; j < n; j++) {
      let tmp = dp[j];
      dp[j] = Math.max(dp[j], dp[j - 1], prev + (s[i] === s[j] ? 2 : 0));
      prev = tmp;
    }
  }
  
  return n - dp[n - 1];
};