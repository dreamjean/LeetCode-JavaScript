/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  return !grid.some((_, i) => grid[i].some((_, j) => (i === j || i + j === grid.length - 1) ? !grid[i][j] : grid[i][j]));
};