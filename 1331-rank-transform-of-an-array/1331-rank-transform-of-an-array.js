/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const map = new Map();

  [...new Set(arr)]
    .sort((a, b) => a - b)
    .forEach((num) => map.set(num, map.size + 1));

  return arr.map((num) => map.get(num));
};
