/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  while (n && (n % 3 !== 2)) n = Math.floor(n / 3);
  
  return !n;
};