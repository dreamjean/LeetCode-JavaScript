/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let [empty, ans, x, y] = [1, 0, -1, -1];
  
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] < 0) return;
    
    if (grid[r][c] === 2) {
      if (!empty) ans++;
      return;
    }
    
    grid[r][c] = -2;
    empty--;
    
    dirs.forEach(([dx, dy]) => dfs(r + dx, c + dy));
    
    grid[r][c] = 0;
    empty++;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = grid[i][j];
      if (grid[i][j] === 1) [x, y] = [i, j];
      if (!grid[i][j]) empty++;
    }
  }
  
  dfs(x, y);
  
  return ans;
};