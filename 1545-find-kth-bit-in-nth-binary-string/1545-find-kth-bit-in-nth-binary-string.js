/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  if (n === 1) return '0';
  
  const mid = 1 << (n - 1);
  if (mid === k) return '1';
  if (mid > k) return findKthBit(n - 1, k);
  
  return invert(findKthBit(n - 1, mid * 2 - k));
};

const invert = bit => bit === '0' ? '1' : '0';