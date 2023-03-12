/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const ans = new Array(n - 1).fill(0);
  let [mask, next, max] = [0, 0, 0];
  
  const dfs = (u, dist = 0) => {
    if (max < dist) {
      max = dist;
      next = u;
    }
    
    mask ^= 1 << u;
    graph[u].forEach((v) => (mask >> v & 1) && dfs(v, dist + 1));
  }
  
  for (let [u, v] of edges) {
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
  }
  
  for (let state = 1; state < 1 << n; state++) {
    if (!(state & (state - 1))) continue;
    
    [mask, max] = [state, 0];
    const curr = mask.toString(2).length - 1;
    dfs(curr);
    
    if (!mask) {
      [mask, max] = [state, 0];
      dfs(next);
      ++ans[max - 1];
    }
  }
  
  return ans;
};