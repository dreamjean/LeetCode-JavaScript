/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
  const mod = 10 ** 9 + 7;
  let [res, len] = [1, 0b100];
  
  for (let i = 2; i <= n; i++) {
    if (i === len) len <<= 1;
    res = (res * len + i) % mod;
  }
  
  return res;
};
