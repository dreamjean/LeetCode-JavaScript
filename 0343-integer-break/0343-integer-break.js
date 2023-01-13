/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n < 4) return n - 1;
  
  const [avg, remain] = [~~(n / 3), n % 3];
  if (!remain) return 3 ** avg;
  if (remain === 1) return 3 ** (avg - 1) * 4;
  
  return 3 ** avg * 2;
};