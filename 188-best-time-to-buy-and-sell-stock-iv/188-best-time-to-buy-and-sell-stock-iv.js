/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length <= 1) return 0;
  
  const sell = new Array(k + 1).fill(0);
  const buy = new Array(k + 1).fill(Number.MAX_SAFE_INTEGER);
  buy[0] = 0;
  
  for (let price of prices) {
    for (let i = 1; i <= k; i++) {
      sell[i] = Math.max(sell[i], price - buy[i]);
      buy[i] = Math.min(buy[i], price - sell[i - 1]);
    }
  }
  
  return sell[k];
};