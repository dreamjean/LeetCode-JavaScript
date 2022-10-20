/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  let [currB, cnt] = [-Infinity, 0];
  
  for (let [a, b] of pairs) {
    if (currB < a) {
      currB = b;
      cnt++;
    } 
  }
  
  return cnt;
};