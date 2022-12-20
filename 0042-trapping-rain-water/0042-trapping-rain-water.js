/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let [left, right, leftMax, rightMax, ans] = [0, height.length - 1, 0, 0, 0];
  
  while (left <= right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    
    ans += leftMax >= rightMax
      ? rightMax - height[right--]
      : leftMax - height[left++];
  }
  
  return ans;
};