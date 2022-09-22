/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const set = new Set(arr);

  for (let piece of pieces) {
    if (!arr.join("").includes(piece.join(""))) return false;
    if (!piece.every((num) => set.has(num))) return false;
  }

  return true;
};
