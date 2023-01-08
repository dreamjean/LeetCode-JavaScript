/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const n = points.length;
  let ans = 1;
  
  for (let i = 0; i < n; i++) {
    const map = {};
    let max = 0;
    for (let j = 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const [diffX, diffY] = [x2 - x1, y2 - y1];
      const k = gcd(diffX, diffY);
      const key = `${diffX / k}-${diffY / k}`;
      map[key] ? map[key]++ : map[key] = 1;
      max = Math.max(max, map[key]);
    }
    
    ans = Math.max(ans, max + 1);
  }
  
  return ans;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));