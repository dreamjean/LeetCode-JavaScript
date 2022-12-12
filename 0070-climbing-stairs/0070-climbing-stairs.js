/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let [p, q] = [0, 1];
  
  while (n--) [p, q] = [q, p + q];
  
  return q;
};