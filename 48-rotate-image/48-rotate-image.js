/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  matrix.reverse();

  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];

  return matrix;
};
