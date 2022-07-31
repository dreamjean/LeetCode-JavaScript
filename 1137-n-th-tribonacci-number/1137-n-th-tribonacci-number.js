/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n;

  let [a, b, c] = [0, 1, 1];

  while (n-- > 2) {
    const sum = a + b + c;
    a = b;
    b = c;
    c = sum;
  }

  return c;
};
