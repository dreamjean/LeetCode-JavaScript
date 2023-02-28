/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length - 2;
  const ans = Array.from({ length: n }, () => new Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let ii = i; ii < i + 3; ii++) {
        for (let jj = j; jj < j + 3; jj++) {
          ans[i][j] = Math.max(ans[i][j], grid[ii][jj]);
        }
      }
    }
  }
  
  return ans;
};