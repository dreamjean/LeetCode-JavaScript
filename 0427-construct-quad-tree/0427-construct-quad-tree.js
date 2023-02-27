/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  return solve(0, 0, grid, grid.length);
};

const sameValue = (x1, y1, grid, length) => {
  for (let i = x1; i < x1 + length; i++) {
    for (let j = y1; j < y1 + length; j++) {
      if (grid[i][j] !== grid[x1][y1]) return false;
    }
  }
  
  return true;
}

const solve = (x1, y1, grid, length) => {
  if (sameValue(x1, y1, grid, length)) return new Node(grid[x1][y1] === 1, true);
  
  length /= 2;
  
  return new Node(
    false,
    false,
    solve(x1, y1, grid, length),
    solve(x1, y1 + length, grid, length),
    solve(x1 + length, y1, grid, length),
    solve(x1 + length, y1 + length, grid, length)
  )
}