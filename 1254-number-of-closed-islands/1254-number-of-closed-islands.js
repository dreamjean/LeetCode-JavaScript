/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let count = 0;
  
  const dfs = (r, c) => {
    if (grid[r][c]) return true;
    if (!r || !c || r >= m - 1 || c >= n - 1) return false;
    
    grid[r][c] = 1;
    let res = true;
    
    for (let [dx, dy] of dirs) {
      if (!dfs(dx + r, dy + c)) res = false;
    }
    
    return res;
  }
  
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n- 1; j++) {
      if (!grid[i][j] && dfs(i, j)) count++;
    } 
  }
  
  return count;
};