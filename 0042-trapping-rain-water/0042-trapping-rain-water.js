/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let [left, right, maxLeft, maxRight, ans] = [0, height.length - 1, 0, 0, 0];
  
  while (left <= right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);
    ans += maxLeft < maxRight
      ? maxLeft - height[left++]
      : maxRight - height[right--];
  }
  
  return ans;
};