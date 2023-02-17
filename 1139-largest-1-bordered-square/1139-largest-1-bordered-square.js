/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const rows = Array.from({ length: m }, () => new Array(n).fill(0));
  const cols = Array.from({ length: m }, () => new Array(n).fill(0));
  let max = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rows[i][j] = !j ? 1 : rows[i][j - 1] + 1;
        cols[i][j] = !i ? 1 : cols[i - 1][j] + 1;
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let small = Math.min(rows[i][j], cols[i][j]);
      while (small > max) {
        if (rows[i - small + 1][j] >= small && cols[i][j - small + 1] >= small)
          max = small
        
        small--;
      }
    }
  }
  
  return max * max;
};