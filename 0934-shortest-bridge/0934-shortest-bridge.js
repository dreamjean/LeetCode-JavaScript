/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const [m, n] = [grid.length, grid[0].length];
  const queue = [];
  let [flag, steps] = [false, 0];

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) return;

    grid[r][c] = 2;
    queue.push([r, c]);

    for (let [dx, dy] of dirs) {
      dfs(r + dx, c + dy);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of dirs) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] === 2)
          continue;
        if (grid[nx][ny] === 1) return steps;

        queue.push([nx, ny]);
        grid[nx][ny] = 2;
      }
    }

    steps++;
  }

  return -1;
};
