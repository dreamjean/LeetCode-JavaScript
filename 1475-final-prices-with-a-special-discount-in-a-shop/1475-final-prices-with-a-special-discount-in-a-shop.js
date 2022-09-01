/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  const n = prices.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }
  
  return prices;
};