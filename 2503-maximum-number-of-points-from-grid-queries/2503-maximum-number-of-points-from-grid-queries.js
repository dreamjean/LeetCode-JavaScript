/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
  const qs = queries.map((query, i) => [query, i]).sort((a, b) => a[0] - b[0]);
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from({ length: m }, () => new Array(n).fill(0));
  const pq = new MinPriorityQueue({ priority: x => x[0] });
  const ans = new Array(queries.length);
  let count = 0;
  
  pq.enqueue([grid[0][0], 0, 0]);
  visited[0][0] = 1;
  
  for (let [query, i] of qs) {
    while (!pq.isEmpty() && pq.front().element[0] < query) {
      const [_, r, c] = pq.dequeue().element;
      count++;
      
      for (let [dx, dy] of dirs) {
        const [x, y] = [dx + r, dy + c];
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;
        
        pq.enqueue([grid[x][y], x, y]);
        visited[x][y] = 1;
      }
    }
    
    ans[i] = count;
  }
  
  return ans;
};