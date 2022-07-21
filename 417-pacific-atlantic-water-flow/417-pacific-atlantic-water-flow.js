/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const [m, n] = [heights.length, heights[0].length];
  const pacific = Array.from({ length: m }, () => new Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => new Array(n).fill(false));
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const ans = [];

  const dfs = (r, c, ocean, prev = Number.MIN_SAVE_INTEGER) => {
    if (
      r < 0 ||
      r >= m ||
      c < 0 ||
      c >= n ||
      heights[r][c] < prev ||
      ocean[r][c]
    )
      return;

    ocean[r][c] = true;

    for (const [dx, dy] of dirs) dfs(dx + r, dy + c, ocean, heights[r][c]);
  };

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
    dfs(i, n - 1, atlantic);
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific);
    dfs(m - 1, j, atlantic);
  }

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (pacific[i][j] && atlantic[i][j]) ans.push([i, j]);

  return ans;
};
