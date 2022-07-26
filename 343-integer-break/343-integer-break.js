/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 3) return n - 1;

  const [a, b] = [~~(n / 3), n % 3];
  if (!b) return 3 ** a;
  if (b === 1) return 3 ** (a - 1) * 4;

  return 3 ** a * 2;
};
