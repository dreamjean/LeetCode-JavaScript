/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let ans = 0;
  
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return 0;
    
    let ans = grid[r][c];
    grid[r][c] = 0;
    
    dirs.forEach(([x, y]) => ans += dfs(r + x, y + c));
    
    return ans;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }
  
  return ans;
};