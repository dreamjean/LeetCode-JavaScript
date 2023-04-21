/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const dp = new Array(high + 1).fill(0);
  const mod = 10**9 + 7;
  let ans = 0;
  dp[0] = 1;
  
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
    if (i >= low) ans = (ans + dp[i]) % mod;
  }
  
  return ans;
};