/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
  const lcm = a * b / gcd(a, b);
  const mod = 1e9 + 7;
  let [lo, hi] = [2, 10e14];
  
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm) < n) lo = mid + 1;
    else hi = mid;
  }
  
  return lo % mod;
};

const gcd = (a, b) => !b ? a : gcd(b, a % b);