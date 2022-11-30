/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let [nearest, pos] = [Infinity, -1];
  
  points.forEach(([px, py], i) => {
    if (px === x || py === y) {
      const disc = Math.abs(x - px) + Math.abs(y - py);
      if (disc < nearest) {
        nearest = disc;
        pos = i;
      }
    }
  })
  
  return pos;
};