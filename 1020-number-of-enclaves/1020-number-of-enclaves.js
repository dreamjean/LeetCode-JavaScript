/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return;

    grid[r][c] = 0;

    for (const [dx, dy] of dirs) dfs(dx + r, dy + c);
  };

  for (let i = 0; i < m; i++) {
    if (grid[i][0]) dfs(i, 0);
    if (grid[i][n - 1]) dfs(i, n - 1);
  }

  for (let j = 0; j < n; j++) {
    if (grid[0][j]) dfs(0, j);
    if (grid[m - 1][j]) dfs(m - 1, j);
  }

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid[i][j]) count++;

  return count;
};
