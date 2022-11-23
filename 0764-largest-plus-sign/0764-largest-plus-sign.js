/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
  const grid = Array.from({ length: n }, () => new Array(n).fill(1));
  let [max, flag] = [1, false];
  
  mines.forEach(([x, y]) => grid[x][y] = 0);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        max = callCheck(1, max, i, j, grid);
        flag = true;
      }
    }
  }
  
  return flag ? max : 0;
};

const callCheck = (k, max, i, j, grid) => {
  const [top, bottom, left, right, n] = [i - k, i + k, j - k, j + k, grid.length];
  
  if (
    top < 0 || bottom >= n || left < 0 || right >= n ||
    !grid[top][j] || !grid[bottom][j] || !grid[i][left] || !grid[i][right]
  ) return max;
  
  max = Math.max(max, ++k);
  
  return callCheck(k, max, i, j, grid);
}