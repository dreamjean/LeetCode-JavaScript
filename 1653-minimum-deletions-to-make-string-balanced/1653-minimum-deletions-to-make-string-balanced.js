/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  let [ans, bCount] = [0, 0];
  
  for (let ch of s) {
    ch === 'a' ? ans = Math.min(ans + 1, bCount) : bCount++;
  }
  
  return ans;
};