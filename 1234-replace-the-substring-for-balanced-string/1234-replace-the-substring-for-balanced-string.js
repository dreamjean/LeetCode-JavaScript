/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const count = { 'Q': 0, 'E': 0, 'W': 0, 'R': 0 };
  const [n, k] = [s.length, s.length / 4];
  let [ans, j] = [n, 0];
  
  for (let ch of s) count[ch]++;
  
  for (let i = 0; i < n; i++) {
    count[s[i]]--;
    while (j < n && count['Q'] <= k && count['E'] <= k && count['W'] <= k && count['R'] <= k) {
      ans = Math.min(ans, i - j + 1);
      count[s[j++]]++;
    }
  }
  
  return ans;
};