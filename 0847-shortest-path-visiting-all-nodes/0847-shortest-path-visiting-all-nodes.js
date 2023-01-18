/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  const n = graph.length;
  const visited = Array.from({ length: n }, () => new Array(1 << n).fill(false));
  const queue = [];
  
  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i, 0]);
    visited[i][1 << i] = true;
  }
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [u, mask, cost] = queue.shift();
      if (mask === (1 << n) - 1) return cost;
      
      for (let v of graph[u]) {
        const maskV = mask | (1 << v);
        if (visited[v][maskV]) continue;
        
        visited[v][maskV] = true;
        queue.push([v, maskV, cost + 1]);
      }
    }
  }
  
  return -1;
};