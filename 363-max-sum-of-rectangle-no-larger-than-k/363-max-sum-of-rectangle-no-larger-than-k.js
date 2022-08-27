/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  let max = -Infinity;
  const R = matrix.length, C = matrix[0].length;
  const sums = Array(R);
  // Try starting from column 0 to the rightmost column
  for (let c1 = 0; c1 < C; c1 += 1) {
    // Because we start with a new column, we should clear sums
    sums.fill(0);
    // Scan through the rest of the columns
    for (let c2 = c1; c2 < C; c2 += 1) {
      // Update current sums for each row, sums[r] = sum(matrix[r][c1:c2]) 
      for (let row = 0; row < R; row += 1) {
        sums[row] += matrix[row][c2];
      }
      // console.log(sums) to see values of sums
      for (let r1 = 0; r1 < R; r1 += 1) {
        let sum = 0;
        for (let r2 = r1; r2 < R; r2 += 1) {
          // Calculate sum for current rectangle: sum(matrix[r1:r2, c1:c2])
          sum += sums[r2];
          // Update target max sum
          if (sum > max && sum <= k) {
            max = sum;
          }
        }
      }
    }
  }
  return max;
};