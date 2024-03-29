/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length;
  const seen = Array.from({ length: n }, () => new Array(1 << n).fill(false));
  const queue = [];

  for (let i = 0; i < n; i++) {
    seen[i][1 << i] = true;
    queue.push([i, 1 << i, 0]);
  }

  while (queue.length) {
    const [u, mask, cost] = queue.shift();
    if (mask === (1 << n) - 1) return cost;

    for (let v of graph[u]) {
      const maskV = mask | (1 << v);
      if (seen[v][maskV]) continue;

      seen[v][maskV] = true;
      queue.push([v, maskV, cost + 1]);
    }
  }
};
