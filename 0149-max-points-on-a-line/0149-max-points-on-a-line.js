/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let ans = 1;

  for (const [x1, y1] of points) {
    const map = {};
    let max = 0;
    for (let i = 1; i < points.length; i++) {
      const [x2, y2] = points[i];
      const [a, b] = [x1 - x2, y1 - y2];
      const k = gcd(a, b);
      const key = `${a / k}-${b / k}`;
      map[key] ? map[key]++ : (map[key] = 1);
      max = Math.max(max, map[key]);
    }

    ans = Math.max(ans, max + 1);
  }

  return ans;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
