/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  const uf = new UnionFind(n + 1);
  const root = uf.find(1);
  let ans = Infinity;
  
  roads.forEach(([a, b, _]) => uf.union(a, b));
  
  for (let [a, b, dist] of roads) {
    if (uf.connected(root, a) || uf.connected(root, b)) ans = Math.min(ans, dist);
  }
  
  return ans;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
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
    if (rootX === rootY) return;
    
    const { parent, rank } = this;
    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
      rank[rootY] += rank[rootX];
    } else {
      parent[rootY] = rootX;
      rank[rootX] += rank[rootY];
    }
  }
}