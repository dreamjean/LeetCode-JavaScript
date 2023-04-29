/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  [a, b, c] = [a, b, c].sort((a, b) => a - b);
  let min = c - a === 2 ? 0 : (b - a <= 2 || c - b <= 2) ? 1 : 2;
  
  return [min, c - a - 2];
};