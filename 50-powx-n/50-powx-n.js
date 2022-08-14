/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (!n) return 1;

  const pow = Math.abs(n);
  const res = !(pow % 2)
    ? myPow(x * x, pow / 2)
    : myPow(x * x, ~~(pow / 2)) * x;

  return n < 0 ? 1 / res : res;
};
