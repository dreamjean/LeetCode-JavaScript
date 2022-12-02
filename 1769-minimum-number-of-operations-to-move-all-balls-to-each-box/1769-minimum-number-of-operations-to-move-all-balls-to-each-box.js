/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const n = boxes.length;
  const ans = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (boxes[j] === '1') ans[i] += Math.abs(i - j);
    }
  }
  
  return ans;
};