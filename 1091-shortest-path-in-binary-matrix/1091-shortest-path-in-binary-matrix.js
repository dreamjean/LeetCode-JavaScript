/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  const n = grid.length;
  const queue = [[0, 0]];
  let count = 0;

  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = size - 1; i >= 0; i--) {
      const [r, c] = queue.shift();
      if (r === n - 1 && c === n - 1) return count;

      for (const [dx, dy] of dirs) {
        const [x, y] = [dx + r, dy + c];
        if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 1) continue;

        grid[x][y] = 1;
        queue.push([x, y]);
      }
    }
  }

  return - 1;
};
