/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  this.sum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.sum[i][j] = matrix[i - 1][j - 1] + this.sum[i - 1][j] + this.sum[i][j - 1] - this.sum[i - 1][j - 1];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.sum[row2 + 1][col2 + 1] - this.sum[row2 + 1][col1] - this.sum[row1][col2 + 1] + this.sum[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */