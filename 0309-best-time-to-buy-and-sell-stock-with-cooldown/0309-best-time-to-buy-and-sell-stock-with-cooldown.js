/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [sold, hold, ans] = [0, -Infinity, 0];
  
  for (let price of prices) {
    let preSold = sold;
    sold = hold + price;
    hold = Math.max(hold, ans - price);
    ans = Math.max(ans, preSold);
  }
  
  return Math.max(ans, sold);
};