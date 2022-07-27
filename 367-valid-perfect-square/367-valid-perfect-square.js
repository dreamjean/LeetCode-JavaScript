/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;

  let [left, right] = [1, num];

  while (left < right) {
    const mid = (left + right) >>> 1;
    if (mid * mid === num) return true;

    mid * mid > num ? (right = mid) : (left = mid + 1);
  }

  return false;
};
