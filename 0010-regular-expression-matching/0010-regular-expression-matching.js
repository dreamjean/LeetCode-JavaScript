/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const [m, n] = [s.length, p.length];
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  
  for (let j = 2; j <= n; j++) 
    dp[j] = dp[j - 2] && (p[j - 1] === '*');
  
  for (let i = 1; i <= m; i++) {
    const tmp = new Array(n + 1).fill(false);
    
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') 
        tmp[j] = dp[j - 1];
      
      else if (p[j - 1] === '*') {
        if (s[i - 1] !== p[j - 2] && p[j - 2] !== '.') 
          tmp[j] = tmp[j - 2];
        
        else tmp[j] = tmp[j - 2] || dp[j];
      }
    }
    
    dp = tmp;
  }
  
  return dp[n];
};