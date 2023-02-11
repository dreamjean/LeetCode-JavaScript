/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  const sum = amount.reduce((a, b) => a + b);
  const max = Math.max(...amount);
  
  return Math.max(max, Math.ceil(sum / 2));
};