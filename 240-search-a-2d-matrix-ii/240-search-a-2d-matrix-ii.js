/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let [r, c] = [matrix.length - 1, 0];

  while (r >= 0 && c < matrix[0].length) {
    if (matrix[r][c] === target) return true;

    matrix[r][c] > target ? r-- : c++;
  }

  return false;
};
