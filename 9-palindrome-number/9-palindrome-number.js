/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  
  let [a, s] = [0, x];
  
  while (s) {
    a = a * 10 + s % 10;
    s = ~~(s / 10);
  }
  
  return a === x;
};