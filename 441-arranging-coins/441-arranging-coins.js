/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let [low, high] = [0, n];

  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (mid * (mid + 1) > 2 * n) high = mid - 1;
    else low = mid + 1;
  }

  return low - 1;
};
