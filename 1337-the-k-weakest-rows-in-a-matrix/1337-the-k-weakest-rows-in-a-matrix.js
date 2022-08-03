/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((curr, i) => [countOnes(curr), i])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .map((x) => x[1])
    .slice(0, k);
};

const countOnes = (arr) => {
  let [l, r] = [0, arr.length - 1];

  while (l <= r) {
    const mid = (l + r) >>> 1;
    arr[mid] ? (l = mid + 1) : (r = mid - 1);
  }

  return l;
};
