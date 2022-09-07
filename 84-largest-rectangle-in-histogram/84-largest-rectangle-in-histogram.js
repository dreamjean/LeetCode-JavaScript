/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights = [0, ...heights, 0];
  const stack = [];
  let res = 0;
  
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.at(-1)] > heights[i]) {
      const j = stack.pop();
      res = Math.max(res, heights[j] * (i - stack.at(-1) - 1));
    }
    
    stack.push(i);
  }
  
  return res;
};