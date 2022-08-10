/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let [buy, sold] = [Infinity, 0];

  for (let price of prices) {
    buy = Math.min(buy, price - sold);
    sold = Math.max(sold, price - buy - fee);
  }

  return sold;
};
