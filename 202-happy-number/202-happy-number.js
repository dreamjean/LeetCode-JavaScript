/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (n && !set.has(n)) {
    set.add(n);
    n = digitsSquaresSum(n);
  }

  return n === 1;
};

const digitsSquaresSum = (n) =>
  [...`${n}`].reduce((acc, cur) => (acc += +cur * +cur), 0);
