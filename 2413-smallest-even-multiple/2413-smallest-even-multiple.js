/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  return n % 2 ? 2 * n : Math.max(2, n)
};