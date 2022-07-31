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
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  const [m, n] = [grid.length, grid[0].length];
  const queue = [[0, 0]];
  let steps = 1;

  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const [r, c] = queue.shift();
      if (r === m - 1 && c === n - 1) return steps;

      for (const [dx, dy] of dirs) {
        const [x, y] = [dx + r, dy + c];
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 1) continue;

        grid[x][y] = 1;
        queue.push([x, y]);
      }
    }

    steps++;
  }

  return -1;
};
