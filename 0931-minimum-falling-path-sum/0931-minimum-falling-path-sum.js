/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] += Math.min(
        matrix[i - 1][Math.max(0, j - 1)],
        matrix[i - 1][j],
        matrix[i - 1][Math.min(j + 1, n - 1)]
      );
    }
  }
  
  return Math.min(...matrix[n - 1]);
};