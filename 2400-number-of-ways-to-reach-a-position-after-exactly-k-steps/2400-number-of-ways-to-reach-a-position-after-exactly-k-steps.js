/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  const dp = Array.from({ length: k + 1 }, () => new Array(k + 1).fill(-1));
  const dist = Math.abs(startPos - endPos);
  if (dist > k || dist % 2 !== k % 2) return 0;
  
  return dfs(k, dist, dp);
};

const dfs = (k, dist, dp) => {
  const mod = 10 ** 9 + 7;
  if (k <= dist) return k === dist;
  if (dp[k][dist] !== -1) return dp[k][dist];
  
  return dp[k][dist] = (dfs(k - 1, Math.abs(dist - 1), dp) + dfs(k - 1, dist + 1, dp)) % mod;
}