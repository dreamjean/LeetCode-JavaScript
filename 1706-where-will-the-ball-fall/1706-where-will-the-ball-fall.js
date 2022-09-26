/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const ans = [];

  for (let c = 0; c < n; c++) {
    let c1 = c;
    for (let r = 0; r < m; r++) {
      const cur = grid[r][c1];
      if (grid[r][c1 + cur] === cur) c1 += cur;
      else [r, c1] = [m, -1];
    }

    ans.push(c1);
  }

  return ans;
};
