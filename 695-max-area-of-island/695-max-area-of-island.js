/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let max = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return 0;

    grid[r][c] = 0;
    let count = 1;

    for (const [dx, dy] of dirs) {
      count += dfs(dx + r, dy + c);
    }

    return count;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) max = Math.max(max, dfs(i, j));
    }
  }

  return max;
};
