/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
  const mod = 1e9 + 7;
  let [l, r, ans] = [0, 0, 0];
  
  while (r < s.length) {
    while (l < r && s[l] !== s[r]) l++;
    
    ans += r - l + 1;
    r++;
  }
  
  return ans % mod;
};