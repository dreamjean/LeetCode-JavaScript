/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let [l, r, ans] = [0, 0, 0];
  
  while (r < s.length) {
    maxCost -= Math.abs(s.charCodeAt(r) - t.charCodeAt(r));
    while (maxCost < 0) {
      maxCost += Math.abs(s.charCodeAt(l) - t.charCodeAt(l));
      l++;
    }
    
    ans = Math.max(ans, r - l + 1);
    r++;
  }
  
  return ans;
};