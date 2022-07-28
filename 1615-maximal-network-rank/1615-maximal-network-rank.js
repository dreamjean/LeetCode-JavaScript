/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const connect = Array.from({ length: n }, () => new Array(n).fill(false));
  const cnt = new Array(n).fill(0);
  let ans = 0;

  for (const [a, b] of roads) {
    cnt[a]++;
    cnt[b]++;
    connect[a][b] = true;
    connect[b][a] = true;
  }

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      ans = Math.max(ans, cnt[i] + cnt[j] - +connect[i][j]);

  return ans;
};
