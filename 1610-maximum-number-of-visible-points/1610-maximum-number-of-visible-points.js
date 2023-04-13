/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
  angle = angle * Math.PI / 180;
  const [x0, y0] = location;
  const angles = [];
  let [j, extra, ans] = [0, 0, 0];
  
  for (let [x, y] of points) {
    if (x == x0 && y == y0) {
      extra++;
      continue;
    }
    
    angles.push(Math.atan2(y - y0, x - x0));
  }
  
  angles
    .sort((a, b) => a - b)
    .forEach((x) => angles.push(x + Math.PI * 2));
  
  angles.forEach((x, i) => {
    while (x - angles[j] > angle) j++;
    
    ans = Math.max(ans, i - j + 1);
  })
  
  return ans + extra;
};