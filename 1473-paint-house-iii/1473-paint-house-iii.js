/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    const dp = Array.from(
        { length: m + 1 }, () => Array.from(
            { length: target + 1 }, () => new Array(n + 1).fill(0)
        ));
    const MAX = 10 ** 6 + 1;
    
    const dfs = (i, t, c) => {
        let res = MAX;
        
        if (i >= m || t < 0) return !t ? t : MAX;
        if (dp[i][t][c]) return dp[i][t][c];
        if (houses[i]) return dfs(i + 1, t - (c !== houses[i] ? 1 : 0), houses[i]);
        
        for (let k = 1; k <= cost[i].length; ++k)
            res = Math.min(res, cost[i][k - 1] + dfs(i + 1, t - (c !== k ? 1 : 0), k));
        
        return dp[i][t][c] = res;
    }
    
    const ans = dfs(0, target, 0);
    
    return ans > MAX - 1 ? -1 : ans;
};