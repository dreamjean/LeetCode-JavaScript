/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const events = [];
  const active = [];
  const ll = BigInt;
  const mod = ll(10 ** 9 + 7);
  let [res, currY] = [0n, 0];

  for (const [x1, y1, x2, y2] of rectangles) {
    events.push([y1, 1, x1, x2], [y2, -1, x1, x2]);
  }

  events.sort((a, b) => a[0] - b[0]);

  for (const [y, sig, x1, x2] of events) {
    let [maxWidth, currX] = [0, -1];

    for (const [cx1, cx2] of active) {
      currX = Math.max(currX, cx1);
      maxWidth += Math.max(0, cx2 - currX);
      currX = Math.max(currX, cx2);
    }

    res += (ll(maxWidth) * ll(y - currY)) % mod;

    if (sig === 1) {
      active.push([x1, x2]);
      active.sort((a, b) => a[0] - b[0]);
    } else {
      for (let i = 0; i < active.length; i++) {
        const [cx1, cx2] = active[i];
        if (cx1 === x1 && cx2 === x2) {
          active.splice(i, 1);
          break;
        }
      }
    }

    currY = y;
  }

  return res % mod;
};
