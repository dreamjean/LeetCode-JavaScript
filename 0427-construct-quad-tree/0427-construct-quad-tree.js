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
  return solve(0, 0, grid.length, grid);
};

const sameValue = (x1, y1, n, grid) => {
  for (let i = x1; i < x1 + n; i++) {
    for (let j = y1; j < y1 + n; j++) {
      if (grid[i][j] !== grid[x1][y1]) return false;
    }
  }
  
  return true;
}

const solve = (x1, y1, n, grid) => {
  if (sameValue(x1, y1, n, grid)) return new Node(grid[x1][y1] === 1, true);
  
  n /= 2;
  
  return new Node(
    false, 
    false,
    solve(x1, y1, n, grid),
    solve(x1, y1 + n, n, grid),
    solve(x1 + n, y1, n, grid),
    solve(x1 + n, y1 + n, n, grid)
  )
}