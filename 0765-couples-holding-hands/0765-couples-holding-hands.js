/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length / 2;
  const parent = Array.from({ length: n }, (_, i) => i);
  let cnt = 0;
  
  for (let i = 0; i < 2 * n; i += 2) {
    if (union(~~(row[i] / 2), ~~(row[i + 1] / 2), parent)) cnt++; 
  }
  
  return n - cnt;
};

const find = (x, parent) => {
  let root = x;
  
  while (root !== parent[root]) root = parent[root];
  
  return root;
}

const union = (x, y, parent) => {
  const xRoot = find(x, parent);
  const yRoot = find(y, parent);
  if (xRoot === yRoot) return true;
  
  parent[xRoot] = yRoot;
  return false;
}