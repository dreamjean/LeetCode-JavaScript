/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length / 2;
  const parents = Array.from({ length: n }, (_, i) => i);
  let cnt = 0;
  
  for (let i = 0; i < 2 * n; i += 2) {
    if (union(~~(row[i] / 2), ~~(row[i + 1] / 2), parents)) cnt++;
  }
  
  return n - cnt;
};

const find = (x, parents) => {
  let root = x;
  while (root !== parents[root]) root = parents[root];
  
  return root;
}

const union = (x, y, parents) => {
  const rootX = find(x, parents);
  const rootY = find(y, parents);
  
  if (rootX === rootY) return true;
  
  parents[rootX] = rootY;
  return false;
}