/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [p, q, r] = [0, 0, 1];
    
    for (let i = 1; i <= n; ++i) {
        [p, q] = [q, r];
        r = p + q;
    }
    
    return r;
};