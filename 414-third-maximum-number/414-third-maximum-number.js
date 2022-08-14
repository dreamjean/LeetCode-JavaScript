/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let [a, b, c] = [-Infinity, -Infinity, -Infinity];
  
  for (let num of nums) {
    if (num > a) [a, b, c] = [num, a, b];
    if (num < a && num > b) [b, c] = [num, b];
    if (num < b && num > c) c = num;
  }
  
  return c === -Infinity ? a : c;
};