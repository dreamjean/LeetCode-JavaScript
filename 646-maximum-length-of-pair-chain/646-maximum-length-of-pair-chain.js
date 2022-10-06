/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  let [curr, ans] = [-Infinity, 0];
  
  for (let [a, b] of pairs) {
    if (curr < a) {
      curr = b;
      ans++;
    }
  }
  
  return ans;
};