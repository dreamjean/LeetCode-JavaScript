/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;
    
    let [a, b] = [0, 1];
    for (let i = 2; i <= n; i++) {
        let sum = a + b;
        a = b;
        b = sum;
    }
    
    return b;
};