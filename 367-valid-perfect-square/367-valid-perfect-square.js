/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let [left, right] = [1, num];

  while (left <= right) {
    const mid = (left + right) >>> 1;
    if (mid * mid === num) return true;

    mid * mid > num ? (right = mid - 1) : (left = mid + 1);
  }

  return false;
};
