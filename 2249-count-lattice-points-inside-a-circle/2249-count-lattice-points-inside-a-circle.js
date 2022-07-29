/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function (circles) {
  circles.sort((a, b) => a[2] - b[2]);
  let [maxX, maxY, count] = [0, 0, 0];

  for (const [x, y, r] of circles)
    [maxX, maxY] = [Math.max(maxX, x + r), Math.max(maxY, y + r)];

  for (let i = 0; i <= maxX; i++) {
    for (let j = 0; j <= maxY; j++) {
      for (const [x, y, r] of circles) {
        const [a, b] = [x - i, y - j];
        if (a * a + b * b <= r * r) {
          count++;
          break;
        }
      }
    }
  }

  return count;
};
