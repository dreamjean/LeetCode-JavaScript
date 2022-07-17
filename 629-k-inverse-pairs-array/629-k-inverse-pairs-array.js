/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const dp = new Array(k + 2).fill(0);
  const pr = new Array(k + 2).fill(0);
  const MOD = 10 ** 9 + 7;

  for (let i = 1; i <= n; i++) {
    dp[1] = 1;

    for (let j = 2; j <= k + 1; j++) {
      dp[j] = (pr[j] - pr[Math.max(0, j - i)] + MOD) % MOD;
    }

    for (let j = 1; j <= k + 1; j++) {
      pr[j] = (pr[j - 1] + dp[j]) % MOD;
    }
  }

  return dp[k + 1];
};
