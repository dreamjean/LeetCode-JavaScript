/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
  const [m, n] = [s.length, t.length];
  let ans = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let miss = 0;
      for (let pos = 0; i + pos < m && j + pos < n; pos++) {
        if (s[i + pos] !== t[j + pos] && ++miss > 1) break;
        
        ans += miss;
      }
    }
  }
  
  return ans;
};