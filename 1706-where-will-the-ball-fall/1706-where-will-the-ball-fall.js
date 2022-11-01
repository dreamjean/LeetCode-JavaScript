/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const ans = new Array(n).fill(-1);

  for (let col = 0; col < n; col++) {
    let start = col;
    for (let row = 0; row < m; row++) {
      const curr = grid[row][start];
      if (curr === grid[row][start + curr]) start += curr;
      else [row, start] = [m, -1];
    }

    ans[col] = start;
  }

  return ans;
};
