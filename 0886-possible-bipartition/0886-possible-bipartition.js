/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const uf = new UnionFind(2 * n + 1);
  
  for (let [a, b] of dislikes) {
    if (uf.connected(a, b)) return false;
    
    uf.union(a, b + n);
    uf.union(a + n, b);
  }
  
  return true;
};

class UnionFind {
  constructor (n) {
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
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    this.parent[rootX] = rootY;
  }
}