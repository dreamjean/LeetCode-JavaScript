/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  
  return sum < max * 2 ? sum - max : Math.floor(sum / 2);
};