/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const N = grid.length;
    const M = (N << 1) - 1;
    const dp = Array.from({ length: N }, () => new Array(N).fill(0));
    dp[0][0] = grid[0][0];
    
    for (let n = 1; n < M; n++) {
        for (let i = N - 1; i >= 0; i--) {
            for (let p = N - 1; p >= 0; p--) {
                let [j, q] = [n - i, n - p];
                
                if (j < 0 || j >= N || q < 0 || q >= N || grid[i][j] < 0 || grid[p][q] < 0) {
                    dp[i][p] = -1;
                    continue;
                }
                
                if (i > 0) dp[i][p] = Math.max(dp[i][p], dp[i - 1][p]);
                if (p > 0) dp[i][p] = Math.max(dp[i][p], dp[i][p - 1]);
                if (i > 0 && p > 0) dp[i][p] = Math.max(dp[i][p], dp[i - 1][p - 1]);
                if (dp[i][p] >= 0) dp[i][p] += grid[i][j] + (i !== p ? grid[p][q] : 0);
            }
        }
    }
    
    return Math.max(dp[N - 1][N - 1], 0);
};