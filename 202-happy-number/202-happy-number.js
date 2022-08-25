/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (n > 1 && !set.has(n)) {
    set.add(n);
    n = digitsSqrSum(n);
  }

  return n === 1;
};

const digitsSqrSum = (n) => {
  let sum = 0;

  while (n) {
    sum += (n % 10) ** 2;
    n = ~~(n / 10);
  }

  return sum;
};
