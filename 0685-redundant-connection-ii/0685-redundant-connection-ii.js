/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const n = edges.length;
  const parents = Array.from({ length: n + 1 }, (_, i) => i);
  let ans1 = [];
  let ans2 = [];
  
  for (let [x, y] of edges) {
    const rootX = find(x, parents);
    const rootY = find(y, parents);
    if (rootY !== y) ans1 = [x, y];
    else if (rootX === rootY) ans2 = [x, y];
    else parents[rootY] = rootX;
  }
  
  if (!ans1.length) return ans2;
  if (!ans2.length) return ans1;
  
  return edges.find(([_, y]) => y === ans1[1]);
};

const find = (x, parents) => {
  let root = x;
  
  while (root !== parents[root]) root = parents[root];
  
  return root;
}