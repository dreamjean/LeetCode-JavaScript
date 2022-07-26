/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (n > 1 && !set.has(n)) {
    set.add(n);
    n = squareDigitsSum(n);
  }

  return n === 1;
};

const squareDigitsSum = (n) =>
  [...`${n}`].reduce((acc, curr) => acc + (+curr) ** 2, 0);
