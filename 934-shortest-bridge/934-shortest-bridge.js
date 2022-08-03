/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const queue = [];
  let [flag, steps] = [false, 0];
  
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) return;
    
    grid[r][c] = 2;
    queue.push([r, c]);
    
    for (const [dx, dy] of dirs)
      dfs(dx + r, dy + c);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        flag = true;
        break;
      }
    }
    
    if (flag) break;
  }
  
  while (queue.length) {
    const size = queue.length;
    for (let i = size - 1; i >= 0; i--) {
      const [r, c] = queue.shift();
      for (const [dx, dy] of dirs) {
        const [x, y] = [dx + r, dy + c];
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 2) continue;
        if (grid[x][y] === 1) return steps;
        
        grid[x][y] = 2;
        queue.push([x, y]);
      }
    }
    
    steps++;
  }
  
  return -1;
};