/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const set = new Set(days);
  const last = days.at(-1);
  const dp = new Array(last + 1).fill(0);
  
  for (let i = 1; i <= last; i++) {
    if (!set.has(i)) dp[i] = dp[i - 1];
    else {
      const [a, b, c] = costs;
      dp[i] = Math.min(
        dp[Math.max(0, i - 1)] + a,
        dp[Math.max(0, i - 7)] + b,
        dp[Math.max(0, i - 30)] + c
      )
    }
  }
  
  return dp.at(-1);
};