/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    const max = Math.max(...amount);
    const sum = amount.reduce((a, b) => a + b);
    
    return Math.max(max, Math.ceil(sum / 2));
};