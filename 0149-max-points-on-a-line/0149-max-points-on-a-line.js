/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let ans = 0;
  
  for (let [x1, y1] of points) {
    const map = {};
    for (let [x2, y2] of points) {
      if (x1 === x2 && y1 === y2) continue;
      const key = (y2 - y1) / (x2 - x1);
      map[key] ? map[key]++ : map[key] = 1;
      ans = Math.max(ans, map[key]);
    }
  }
  
  return ans + 1;
};