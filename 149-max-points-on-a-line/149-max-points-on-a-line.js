/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let ans = 1;

  for (const [x1, y1] of points) {
    const map = {};
    for (let i = 1; i < points.length; i++) {
      const [x2, y2] = points[i];
      const [a, b] = [x2 - x1, y2 - y1];
      const k = gcd(a, b);
      const key = `${a / k}-${b / k}`;
      map[key] ? map[key]++ : (map[key] = 1);
    }

    const max = Math.max(...Object.values(map)) + 1;
    ans = Math.max(ans, max);
  }

  return ans;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
