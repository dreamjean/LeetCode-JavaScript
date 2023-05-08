/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - 1 - i];
    if (i * 2 === n - 1) sum -= mat[i][i];
  }

  return sum;
};