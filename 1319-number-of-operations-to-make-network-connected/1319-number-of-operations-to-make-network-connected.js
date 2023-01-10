/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  const uf = new UnionFind(n);
  let extract = 0;
  
  for (let [a, b] of connections) {
    if (uf.connected(a, b)) extract++;
    else uf.union(a, b);
  }
  
  return extract >= uf.getCount() - 1 ? uf.getCount() - 1 : -1;
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
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getCount() {
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