/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let [a, b] = [1, 1];
  
  while (n--) [a, b] = [a + b, a];
  
  return b;
};

