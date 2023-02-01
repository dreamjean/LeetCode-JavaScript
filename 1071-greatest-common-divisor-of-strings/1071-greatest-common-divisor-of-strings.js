/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const [n1, n2] = [str1.length, str2.length];
  
  return str1 + str2 === str2 + str1 ? str1.slice(0, gcd(n1, n2)) : '';
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));