/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  const graph = Array.from({ length: n }, () => new Set());
  const count = new Array(n).fill(1);
  const ans = new Array(n).fill(0);
  
  edges.forEach(([u, v]) => {
    graph[u].add(v);
    graph[v].add(u);
  })
  
  const postOrder = (node, parent) => {
    for (let child of graph[node]) {
      if (child === parent) continue;
      
      postOrder(child, node);
      count[node] += count[child];
      ans[node] += ans[child] + count[child];
    }
  }
  
  const preOrder = (node, parent) => {
    for (let child of graph[node]) {
      if (child === parent) continue;
      
      ans[child] = ans[node] - count[child] + n - count[child];
      preOrder(child, node);
    }
  }
  
  postOrder(0, -1);
  preOrder(0, -1);
  
  return ans;
};