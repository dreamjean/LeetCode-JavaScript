/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const [m, n] = [grid.length, grid[0].length];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && j) grid[i][j] += grid[i][j - 1];
      if (i && !j) grid[i][j] += grid[i - 1][j];
      if (i && j) grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};
