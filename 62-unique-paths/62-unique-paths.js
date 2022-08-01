/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let [x, y, ans] = [n, 1, 1];
    
    while (y < m) ans = ans * x++ / y++;
    
    return ans;
};