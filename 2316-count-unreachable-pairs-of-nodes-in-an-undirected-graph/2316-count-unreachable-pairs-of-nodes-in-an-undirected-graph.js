/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);
  let ans = n * (n - 1) / 2;
  
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  })
  
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let count = dfs(i, visited, graph);
      ans -= count * (count - 1) / 2;
    }
  }
  
  return ans;
};

const dfs = (curr, visited, graph) => {
  visited[curr] = true;
  let res = 1;
  
  graph[curr].forEach((next) => {
    if (!visited[next]) res += dfs(next, visited, graph);
  });
  
  return res;
}