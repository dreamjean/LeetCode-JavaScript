/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [buy1, buy2, sell1, sell2] = [-prices[0], -prices[0], 0, 0];
  
  for (let price of prices) {
    buy1 = Math.max(buy1, -price);
    sell1 = Math.max(sell1, buy1 + price);
    buy2 = Math.max(buy2, sell1 - price);
    sell2 = Math.max(sell2, buy2 + price);
  }
  
  return sell2;
};