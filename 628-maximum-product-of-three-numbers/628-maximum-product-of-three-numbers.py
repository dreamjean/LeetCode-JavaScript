/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let [a, b, c, x, y] = [-Infinity, -Infinity, -Infinity, Infinity, Infinity];
  
  for (let num of nums) {
    if (num > a) [a, b, c] = [num, a, b];
    else if (num > b) [b, c] = [num, b];
    else if (num > c) c = num;
    
    if (num < x) [x, y] = [num, x];
    else if (num < y) y = num;
  }
  
  return Math.max(a * b * c, a * x * y);
};