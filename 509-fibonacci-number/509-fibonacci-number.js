/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;

  let [a, b] = [0, 1];

  for (let i = 2; i <= n; i++) {
    const sum = a + b;
    a = b;
    b = sum;
  }

  return b;
};
