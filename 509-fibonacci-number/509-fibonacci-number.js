/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const preSum = [0, 1];
    
    for (let i = 2; i <= n; i++)
        preSum[i] = preSum[i - 2] + preSum[i - 1];
    
    return preSum[n];
};