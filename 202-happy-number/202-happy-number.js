/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (!set.has(n)) {
    set.add(n);
    n = digitsSqrSum(n);
  }

  return n === 1;
};

const digitsSqrSum = (n) => [...`${n}`].reduce((acc, curr) => acc + (+curr) ** 2, 0)
