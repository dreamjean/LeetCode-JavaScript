/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const dp = Array.from({ length: minProfit + 1 }, () => new Array(n + 1).fill(0));
  const mod = 1e9 + 7;
  dp[0][0] = 1;
  
  for (let k = 0; k < group.length; k++) {
    const [g, p] = [group[k], profit[k]];
    
    for (let i = minProfit; i >= 0; i--) {
      for (let j = n - g; j >= 0; j--) {
        dp[Math.min(i + p, minProfit)][j + g] = (dp[Math.min(i + p, minProfit)][j + g] + dp[i][j]) % mod; 
      }
    }
  }
  
  return dp[minProfit].reduce((a, b) => a = (a + b) % mod, 0);
};