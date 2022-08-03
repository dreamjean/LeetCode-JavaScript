/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [min, max] = [Infinity, 0];

  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }

  return max;
};
