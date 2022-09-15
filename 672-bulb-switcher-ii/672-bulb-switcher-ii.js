/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
  if (!presses) return 1;
  if (n === 1) return 2;
  if (n === 2) return presses === 1 ? 3 : 4;
  if (presses === 1) return 4;
  
  return presses === 2 ? 7 : 8;
};