/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const map = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0 };
  const [n, k] = [s.length, s.length / 4];
  let [l, r, ans] = [0, 0, n];
  
  for (let ch of s)
    ++map[ch];
  
  while (r < n) {
    --map[s[r]];
    while (l < n && map['Q'] <= k && map['W'] <= k && map['E'] <= k && map['R'] <= k) {
      ans = Math.min(ans, r - l + 1);
      ++map[s[l++]];
    }
    
    r++;
  } 
  
  return ans;
};