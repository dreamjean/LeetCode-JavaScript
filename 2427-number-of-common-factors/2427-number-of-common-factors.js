/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  const high = gcd(a, b);
  let ans = 1;
  
  for (let i = 2; i <= high; ++i) {
    if (!(a % i) && !(b % i)) ans++;
  }
  
  return ans;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));