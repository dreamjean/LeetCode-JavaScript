/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const n = grid.length;
  const queue = [];
  let step = -1;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) queue.push([i, j]);
    }
  }
  
  if (!queue.length || queue.length === n * n) return step;
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();
      for (let [dx, dy] of dirs) {
        const [x, y] = [dx + r, dy + c];
        if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y]) continue;
        
        grid[x][y] = 1;
        queue.push([x, y]);
      }
    }
    
    step++;
  }
  
  return step;
};