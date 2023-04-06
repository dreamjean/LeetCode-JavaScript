/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
  let ans = '';
  
  while (n) {
    ans = `${n & 1}` + ans;
    n = -(n >> 1);
  }
  
  return ans ? ans : '0';
};