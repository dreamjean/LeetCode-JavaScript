/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const [m, n] = [grid.length, grid[0].length];
  const seen = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  const queue = [[0, 0, 0]];
  let steps = 0;
  seen[0][0] = 0;
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [cost, row, col] = queue.shift();
      if (row === m - 1 && col === n - 1) return steps;
      
      for (let [dx, dy] of dirs) {
        const [x, y] = [dx + row, dy + col];
        if (x < 0 || x >= m || y < 0 || y >= n) continue;
        
        const newCost = grid[x][y] + cost;
        if (newCost >= seen[x][y] || cost > k) continue;
        
        seen[x][y] = newCost;
        queue.push([newCost, x, y]);
      }
    }
    
    steps++;
  }
  
  return -1;
};