/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const find = new Array(n + 1).fill(0);
    const cnt = [0, 1];
    const mod = 1e9 + 7;
    let res = 1;
    
    for (let i = 2; i <= n; i++) {
        if (!find[i]) {
            for (let j = i * i; j <= n; j += i) {
                find[j] = 1;
            }
        }
        
        res = res * ++cnt[find[i]] % mod;
    }
    
    return res;
};