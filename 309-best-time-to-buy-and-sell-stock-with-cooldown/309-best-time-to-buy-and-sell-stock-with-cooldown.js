/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [sold, hold, rest] = [0, -Infinity, 0];

  for (let price of prices) {
    let preSold = sold;
    sold = hold + price;
    hold = Math.max(hold, rest - price);
    rest = Math.max(rest, preSold);
  }

  return Math.max(sold, rest);
};
