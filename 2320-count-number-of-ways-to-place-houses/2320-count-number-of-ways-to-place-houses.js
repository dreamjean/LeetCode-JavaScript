/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
    const mod = 1e9 + 7;
    let [a, b] = [1n, 1n];
    
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    
    return b * b % BigInt(mod);
};