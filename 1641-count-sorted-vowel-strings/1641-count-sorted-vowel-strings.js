/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let [a, b, c, d, e] = [1, 1, 1, 1, 1];
  
  while (n--) {
    a += b + c + d + e;
    b += c + d + e;
    c += d + e;
    d += e;
  }
  
  return a;
};