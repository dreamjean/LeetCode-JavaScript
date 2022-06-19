/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    
    for (const [h, w, p] of prices) dp[h][w] = p;
    
    for (let h = 1; h <= m; h++) {
        for (let w = 1; w <= n; w++) {
            for (let nh = 1; nh <= h / 2; nh++) 
                dp[h][w] = Math.max(dp[h][w], dp[nh][w] + dp[h - nh][w]);
            
            for (let nw = 1; nw <= w / 2; nw++)
                dp[h][w] = Math.max(dp[h][w], dp[h][nw] + dp[h][w - nw]);
        }
    }
    
    return dp[m][n];
};