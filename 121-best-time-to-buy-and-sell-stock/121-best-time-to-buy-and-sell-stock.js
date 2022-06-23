/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [min, maxDiff] = [Infinity, 0];
    
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxDiff = Math.max(maxDiff, prices[i] - min);
    }
    
    return maxDiff;
};