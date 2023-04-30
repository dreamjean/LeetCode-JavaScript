/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  edges.sort((a, b) => b[0] - a[0]);
  const ufAlice = new UnionFind(n + 1);
  const ufBob = new UnionFind(n + 1);
  let count = 0;
  
  for (let [type, u, v] of edges) {
    if (type === 3) count += ufAlice.union(u, v) | ufBob.union(u, v);
    else if (type === 2) count += ufBob.union(u, v);
    else count += ufAlice.union(u, v);
  }
  
  return ufAlice.united() && ufBob.united() ? edges.length - count : -1;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = n;
  }
  
  find(x) {
    let parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  united() {
    return this.count === 2;
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return false;
    
    this.parent[rootX] = rootY;
    this.count--;
    
    return true;
  }
}