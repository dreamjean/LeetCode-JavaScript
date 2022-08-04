/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  if (n === 1) return "0";

  const mid = 1 << (n - 1);
  if (k === mid) return "1";
  if (k < mid) return findKthBit(n - 1, k);

  k = mid * 2 - k;
  return invert(findKthBit(n - 1, k));
};

const invert = (bit) => (bit === "0" ? "1" : "0");
