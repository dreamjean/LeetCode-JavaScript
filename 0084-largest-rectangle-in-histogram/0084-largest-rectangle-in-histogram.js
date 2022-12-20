/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights = [0, ...heights, 0];
  const stack = [-1];
  let ans = 0;
  
  for (let i = 0; i < heights.length; i++) {
    while (heights[stack.at(-1)] > heights[i]) {
      const j = stack.pop();
      ans = Math.max(ans, (i - stack.at(-1) -1) * heights[j]); 
    }
    
    stack.push(i);
  }
  
  return ans;
};