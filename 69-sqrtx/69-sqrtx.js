/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let [low, high] = [1, x];

  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (mid * mid === x) return mid;
    mid * mid > x ? (high = mid - 1) : (low = mid + 1);
  }

  return low - 1;
};
