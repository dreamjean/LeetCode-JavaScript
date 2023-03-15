/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  const connected = Array.from({ length: n }, () => new Array(n).fill(0));
  const cnt = new Array(n).fill(0);
  let ans = 0;
  
  for (let [a, b] of roads) {
    cnt[a]++;
    cnt[b]++;
    connected[a][b] = connected[b][a] = 1;
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ans = Math.max(ans, cnt[i] + cnt[j] - connected[i][j]);
    }
  }
  
  return ans;
};