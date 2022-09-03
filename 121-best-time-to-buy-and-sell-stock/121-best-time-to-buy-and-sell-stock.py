/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [min, res] = [prices[0], 0];
  
  for (let p of prices) {
    min = Math.min(min, p);
    res = Math.max(res, p - min);
  }
  
  return res;
};