/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const [[x1, y1], [x2, y2]] = coordinates.slice(0, 2);
  
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if ((x2 - x1) * (y - y1) !== (y2 - y1) * (x - x1)) return false;
  }
  
  return true;
};