/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  const ans = [];
  let [x, y] = [1, 1000];
  
  while (x <= 1000 && y > 0) {
    const currVal = customfunction.f(x, y);
    if (currVal < z) ++x;
    else if (currVal > z) --y;
    else ans.push([x++, y--]);
  }
  
  return ans;
};