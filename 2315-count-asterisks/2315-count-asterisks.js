/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let [ans, cnt] = [0, 0];
  
  for (let ch of s) {
    if (ch === '|') cnt++;
    if (!(cnt % 2) && ch === '*') ans++;
  }
  
  return ans;
};