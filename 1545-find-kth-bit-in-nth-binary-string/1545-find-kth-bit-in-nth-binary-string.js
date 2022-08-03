/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  return String(~~((((k / (k & -k)) >> 1) & 1) ^ (k & 1) ^ 1));
};
