/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let count = 0;
  
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n) return false;
    if (grid[r][c]) return true;
    
    grid[r][c] = 1;
    let res = true;
    
    for (let [dx, dy] of dirs) {
      if (!dfs(dx + r, dy + c)) res = false;
    }
    
    return res;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j] && dfs(i, j)) count++;
    }
  }
  
  return count;
};