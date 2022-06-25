/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function(n) {
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 7 }, () => new Array(7).fill(0)));
    
    return find(dp, n);
};

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const find = (dp, n, p1 = 0, p2 = 0) => {
    const mod = 1e9 + 7;
    
    if (!n) return 1;
    
    if (!dp[n][p1][p2]) {
        for (let i = 1; i < 7; i++) {
            if (i !== p1 && i !== p2 && (!p1 || gcd(i, p1) === 1))
                dp[n][p1][p2] = (dp[n][p1][p2] + find(dp, n - 1, i, p1)) % mod;
        }
    }
    
    return dp[n][p1][p2];
}
