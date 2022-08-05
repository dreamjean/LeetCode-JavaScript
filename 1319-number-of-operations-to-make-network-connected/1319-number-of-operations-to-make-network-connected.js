/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;

  const graph = Array.from({ length: n }, () => new Set());
  const seen = new Array(n).fill(0);
  let count = 0;

  const dfs = (curr) => {
    for (let next of graph[curr]) {
      if (!seen[next]++) dfs(next);
    }
  };

  for (let [a, b] of connections) {
    graph[a].add(b);
    graph[b].add(a);
  }

  for (let i = 0; i < n; i++) 
    if (!seen[i]++ && ++count) dfs(i);

  return count - 1;
};
