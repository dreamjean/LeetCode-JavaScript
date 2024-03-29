/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let count = 0;
  
  const fill = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return;
    
    grid[r][c] = 0;
    dirs.forEach(([dx, dy]) => fill(dx + r, dy + c));
  }
  
  for (let i = 0; i < m; i++) {
    fill(i, 0);
    fill(i, n - 1);
  }
  
  for (let j = 0; j < n; j++) {
    fill(0, j);
    fill(m - 1, j);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count += grid[i][j];
    }
  }
  
  return count;
};