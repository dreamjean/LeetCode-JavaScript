/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const [m, n] = [grid.length, grid[0].length];
  const arr = grid.flat();
  const ans = [];
  k %= m * n;

  arr.unshift(...arr.splice(m * n - k));

  while (arr.length) ans.push(arr.splice(0, n));

  return ans;
};
