/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const ans = new Array(n).fill(0);
  
  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, `${grid[i][j]}`.length);
    }
    
    ans[j] = max;
  }
  
  return ans;
};