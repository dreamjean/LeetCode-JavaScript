/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  k -= n;
  let [curr, ans] = [0, ''];
  
  while (n--) {
    curr = Math.min(25, k);
    ans = String.fromCharCode(curr + 97) + ans;
    k -= curr;
  }
  
  return ans;
};