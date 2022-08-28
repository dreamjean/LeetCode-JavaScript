/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
  let [low, high] = [0, k + 1];

  while (low < high) {
    const mid = (low + high) >>> 1;
    const num = trailingZeros(mid);
    if (num === k) return 5;

    num < k ? (low = mid + 1) : (high = mid);
  }
  
  return 0;
};

const trailingZeros = (n) => {
  let res = n;

  while (n) {
    n = ~~(n / 5);
    res += n;
  }

  return res;
};
