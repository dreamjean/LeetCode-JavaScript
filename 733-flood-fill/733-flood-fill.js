/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const [m, n, oldColor] = [image.length, image[0].length, image[sr][sc]];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  if (oldColor === color) return image;

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== oldColor) return;

    image[r][c] = color;

    for (const [dx, dy] of dirs) {
      dfs(dx + r, dy + c);
    }
  };

  dfs(sr, sc);

  return image;
};
