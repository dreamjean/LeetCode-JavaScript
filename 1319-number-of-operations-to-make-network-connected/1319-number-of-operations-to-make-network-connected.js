/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;
  
  const uf = new UnionFind(n);
  
  connections.forEach(([a, b]) => uf.union(a, b));
  
  return uf.componentSize() - 1;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = n;
  }

  find(x) {
    const parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }

    return x;
  }

  componentSize() {
    return this.count;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    rootX < rootY
      ? this.parent[rootX] = rootY
      : this.parent[rootY] = rootX;
    
    this.count--;
  }
}