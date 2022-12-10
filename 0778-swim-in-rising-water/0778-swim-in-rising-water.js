/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const seen = Array.from({ length: m }, () => new Array(n).fill(false));
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const pq = new MinPriorityQueue({ priority: x => x[0] });
  pq.enqueue([grid[0][0], 0, 0]);
  
  while (!pq.isEmpty()) {
    const [cost, r, c] = pq.dequeue().element;
    if (r === m - 1 && c === n - 1) return cost;
    
    if (seen[r][c]) continue;
    seen[r][c] = true;
    
    for (const [dx, dy] of dirs) {
      const [x, y] = [dx + r, dy + c];
      if (x < 0 || x >= m || y < 0 || y >= n || seen[x][y]) continue;
      
      pq.enqueue([Math.max(cost, grid[x][y]), x, y]);
    }
  }
  
  return 0;
};