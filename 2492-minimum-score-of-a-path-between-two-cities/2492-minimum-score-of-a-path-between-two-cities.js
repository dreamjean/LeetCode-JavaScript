/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  const uf = new UnionFind(n);
  let ans = Infinity;
  
  roads.forEach(([a, b]) => uf.union(a, b));
  
  roads.forEach(([a, b, distance]) => {
    if (uf.isConnected(1, a)) ans = Math.min(ans, distance);
  })
  
  return ans;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  
  find(x) {
    const parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    
    this.parent[rootX] = rootY;
  }
}