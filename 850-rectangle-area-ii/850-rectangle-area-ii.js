/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const events = [];
  const active = [];
  const ll = BigInt;
  const MOD = ll(1e9 + 7);
  let [area, currY] = [0n, 0];

  for (let [x1, y1, x2, y2] of rectangles) {
    events.push([y1, 1, x1, x2], [y2, -1, x1, x2]);
  }

  events.sort((a, b) => a[0] - b[0]);

  for (let [y, sig, x1, x2] of events) {
    let [currX, maxWidth] = [-1, 0];
    for (let [cx1, cx2] of active) {
      currX = Math.max(currX, cx1);
      maxWidth += Math.max(0, cx2 - currX);
      currX = Math.max(currX, cx2);
    }

    area += (ll(y - currY) * ll(maxWidth)) % MOD;

    if (sig === 1) {
      active.push([x1, x2]);
      active.sort((a, b) => a[0] - b[0]);
    } else {
      for (let [i, [cx1, cx2]] of active.entries()) {
        if (cx1 === x1 && cx2 === x2) {
          active.splice(i, 1);
          break;
        }
      }
    }

    currY = y;
  }

  return area % MOD;
};
