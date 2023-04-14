/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
  const queue = [];
  let [l, r, ans] = [0, -1, -Infinity];
  
  for (let [x, y] of points) {
    while (l <= r && queue[l][1] < x - k) l++;
    
    if (l <= r) ans = Math.max(ans, queue[l][0] + x + y);
    
    while (l <= r && queue[r][0] <= y - x) r--;
    
    queue[++r] = [y - x, x];
  }
  
  return ans;
};