/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== "1") return;

    grid[r][c] = "0";

    for (let [dx, dy] of dirs) dfs(dx + r, dy + c);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};
