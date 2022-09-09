/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const n = prices.length;
  if (n <= 1) return 0;
    
  const sells = new Array(k + 1).fill(0);
  const buys = new Array(k + 1).fill(Number.MAX_SAFE_INTEGER);
  buys[0] = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      sells[j] = Math.max(sells[j], prices[i] - buys[j]);
      buys[j] = Math.min(buys[j], prices[i] - sells[j - 1]);
    }
  }
  
  return sells[k];
};