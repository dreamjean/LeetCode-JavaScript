/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const connect = Array.from({ length: n }, () => new Set());
  let ans = 0;

  for (const [a, b] of roads) {
    connect[a].add(b);
    connect[b].add(a);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ans = Math.max(
        ans,
        connect[i].size + connect[j].size - +connect[i].has(j)
      );
    }
  }

  return ans;
};
