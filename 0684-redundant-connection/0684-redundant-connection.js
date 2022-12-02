/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const n = edges.length;
  const parents = Array.from({ length: n + 1 }, (_, i) => i);
  
  for (let [x, y] of edges) {
    if (find(x, parents) === find(y, parents)) return [x, y];
    
    union(x, y, parents);
  }
};

const find = (x, parents) => {
  let root = x;
  while (root !== parents[root]) root = parents[root];
  
  return root;
}

const union = (x, y, parents) => {
  const rootX = find(x, parents);
  const rootY = find(y, parents);
  if (rootX === rootY) return;
  
  parents[rootX] = rootY;
}