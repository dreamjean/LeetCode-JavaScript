/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  const uf = new UnionFind(n + 1);
  const map = {};
  
  for (let i = threshold + 1; i <= n; i++) {
    if (uf.parentChanged(i)) continue;
    for (let j = i * 2; j <= n; j += i) {
      if (!(j % i)) uf.union(i, j);
    }
  }
  
  return queries.map(([a, b]) => uf.connected(a, b));
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
  }
  
  find(x) {
    const parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  parentChanged(x) {
    return this.parent[x] !== x;
  }
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    
    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX];
    } else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY];
    }
  }
}