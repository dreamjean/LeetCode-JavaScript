/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const [m, n] = [grid1.length, grid1[0].length];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid2[r][c]) return 1;

    grid2[r][c] = 0;
    let res = 1;

    for (const [dx, dy] of dirs) if (!dfs(dx + r, dy + c)) res = 0;

    return res && grid1[r][c];
  };

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid2[i][j] === 1) count += +dfs(i, j);

  return count;
};
