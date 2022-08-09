/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let [l, r, lMax, rMax, max] = [0, height.length - 1, 0, 0, 0];

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    max += height[l] < height[r] ? lMax - height[l++] : rMax - height[r--];
  }

  return max;
};
