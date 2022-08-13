/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  return arr.reduce(
    (acc, curr, i) => {
      acc[0] = Math.max(acc[0], curr);
      acc[1] += +(acc[0] === i);

      return acc;
    },
    [0, 0]
  )[1];
};
