/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  return bitCount(k - 1) % 2;
};

const bitCount = (x) => {
  let cnt = 0;

  while (x) {
    cnt++;
    x &= x - 1;
  }

  return cnt;
};
