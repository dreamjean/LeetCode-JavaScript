/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let [ans, empty, x, y] = [0, 1, -1, -1];
  
  const dfs = (x, y) => {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] < 0) return;    
    if (grid[x][y] === 2) {
      if (!empty) ans++;
      return;
    } 
    
    grid[x][y] = -2;
    empty--;
    
    dirs.forEach(([dx, dy]) => dfs(dx + x, dy + y));
    
    grid[x][y] = 0;
    empty++;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j];
      if (!num) empty++;
      if (num === 1) [x, y] = [i, j];
    }
  }
  
  dfs(x, y);
  
  return ans;
};