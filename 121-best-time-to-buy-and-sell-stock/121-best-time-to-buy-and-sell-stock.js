/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [min, res] = [prices[0], 0];
  
  for (let price of prices) {
    min = Math.min(min, price);
    res = Math.max(res, price - min);
  }
  
  return res;
};