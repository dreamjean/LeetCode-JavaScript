/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let [curr, res] = [0, ''];
  k -= n;
  
  while (n--) {
    curr = Math.min(25, k);
    res = String.fromCharCode(97 + curr) + res;
    k -= curr;
  }
  
  return res;
};