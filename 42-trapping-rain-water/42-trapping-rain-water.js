/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let [l, r, lmax, rmax, max] = [0, height.length - 1, 0, 0, 0];
  
  while (l < r) {
    lmax = Math.max(lmax, height[l]);
    rmax = Math.max(rmax, height[r]);
    
    max += height[l] < height[r]
      ? lmax - height[l++]
      : rmax - height[r--];
  }
  
  return max;
};