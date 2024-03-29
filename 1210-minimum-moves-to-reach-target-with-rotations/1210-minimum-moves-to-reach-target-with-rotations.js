/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const n = grid.length;
  const dirs = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const visited = new Set('0-0-0');
  const queue = [[0, 0, 0, 0]];
  
  while (queue.length) {
    const [x, y, r, cost] = queue.shift();
    if (x === n - 1 && y === n - 2) return cost;

    for (let [dx, dy, dr] of dirs) {
      const [nx, ny, nr] = [dx + x, dy + y, dr ^ r];
      const [x2, y2] = [nx + nr, ny + (nr ^ 1)];
      if (
        visited.has(`${nx}-${ny}-${nr}`) || x2 >= n || y2 >= n ||
        grid[nx][ny] || grid[x2][y2] || (nr !== r && grid[nx + 1][ny + 1])  
      )
        continue;

      visited.add(`${nx}-${ny}-${nr}`);
      queue.push([nx, ny, nr, cost + 1]);
    }

  }
  
  return -1;
};