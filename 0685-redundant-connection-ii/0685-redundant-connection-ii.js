/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  let ans1 = [];
  let ans2 = [];
  
  for (let [u, v] of edges) {
    const uRoot = find(u, parent);
    const vRoot = find(v, parent);
    if (v !== vRoot) ans1 = [u, v];
    else if (uRoot === vRoot) ans2 = [u, v];
    else parent[vRoot] = uRoot;
  }
  
  if (!ans1.length) return ans2;
  if (!ans2.length) return ans1;
  
  return edges.find(([_, v]) => v === ans1[1]);
};

const find = (x, parent) => {
  let root = x;
  
  while (root !== parent[root]) root = parent[root];
  
  return root;
}