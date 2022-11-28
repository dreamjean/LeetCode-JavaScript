/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[1] - b[1]);
  let [allow, pos] = [1, points[0][1]];
  
  for (let i = 1; i < points.length; i++) {
    if (pos < points[i][0]) {
      allow++;
      pos = points[i][1];
    }
  }
  
  return allow;
};