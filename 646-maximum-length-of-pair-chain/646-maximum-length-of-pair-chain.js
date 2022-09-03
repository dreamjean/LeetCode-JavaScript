/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  let [curr, count] = [-Infinity, 0];
  
  for (const [x, y] of pairs) {
    if (curr < x) {
      curr = y;
      count++;
    }
  }
  
  return count;
};