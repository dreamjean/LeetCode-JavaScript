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
      const curr = grid[r][c1];
      if (curr === grid[r][c1 + curr]) c1 += curr;
      else [r, c1] = [m, -1];
    }

    ans.push(c1);
  }

  return ans;
};
