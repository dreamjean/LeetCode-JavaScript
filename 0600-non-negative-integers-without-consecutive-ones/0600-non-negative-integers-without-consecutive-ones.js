/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
  n++;
  let [x, y, ans] = [1, 2, 0];
  
  while (n) {
    if ((n & 1) && (n & 2)) ans = 0;
    ans += x * (n & 1);
    n >>= 1;
    [x, y] = [y, x + y];
  }
  
  return ans;
};