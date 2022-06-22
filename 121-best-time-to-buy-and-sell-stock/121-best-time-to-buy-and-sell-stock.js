/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [min, max] = [Infinity, 0];
    
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    
    return max;
};