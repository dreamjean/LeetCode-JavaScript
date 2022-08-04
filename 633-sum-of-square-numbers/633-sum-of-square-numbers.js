/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let [lo, hi] = [0, ~~Math.sqrt(c)];

  while (lo <= hi) {
    const squareSum = lo * lo + hi * hi;
    if (squareSum === c) return true;

    squareSum > c ? hi-- : lo++;
  }

  return false;
};
