/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [buy, sell] = [prices[0], 0];
  
  for (let price of prices) {
    buy = Math.min(buy, price);
    sell = Math.max(sell, price - buy);
  }
  
  return sell;
};