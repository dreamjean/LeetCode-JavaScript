/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let [ans, ones] = [0, 0];
  
  for (let ch of s) {
    ch === '0' ? ans = Math.min(ans + 1, ones) : ones++;
  }
  
  return ans;
};