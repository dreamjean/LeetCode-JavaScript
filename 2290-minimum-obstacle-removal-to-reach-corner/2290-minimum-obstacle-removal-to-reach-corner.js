/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const pq = new MinPriorityQueue({ priority: (x) => x[0] });
  pq.enqueue([0, 0, 0]);
  visited[0][0] = true;

  while (!pq.isEmpty()) {
    const [cost, r, c] = pq.dequeue().element;
    if (r === m - 1 && c === n - 1) return cost;

    for (const [dx, dy] of dirs) {
      const [x, y] = [dx + r, dy + c];
      if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;

      visited[x][y] = true;
      pq.enqueue([cost + +(grid[x][y] === 1), x, y]);
    }
  }
};
