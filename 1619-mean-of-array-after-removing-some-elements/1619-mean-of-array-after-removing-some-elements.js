/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const n = arr.length;
  const skip = ~~(n / 20);

  return (
    arr
      .sort((a, b) => a - b)
      .slice(skip, -skip)
      .reduce((a, b) => a + b) /
    (n - 2 * skip)
  );
};
