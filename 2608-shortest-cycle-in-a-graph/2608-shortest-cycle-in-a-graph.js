/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  let ans = Infinity;
  
  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  })
  
  for (let i = 0; i < n; i++) 
    ans = Math.min(ans, bfs(i, n, graph));
  
  return ans < Infinity ? ans : -1;
};

const bfs = (i, n, graph) => {
  const queue = [i];
  const dist = new Array(n).fill(-1);
  let ans = Infinity;
  dist[i] = 0;
  
  while (queue.length) {
    const u = queue.shift();
    for (let v of graph[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
      
      else if (dist[u] <= dist[v]) 
        ans = Math.min(ans, dist[u] + dist[v] + 1);
    }
  }
  
  return ans;
}