/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  edges.sort((a, b) => b[0] - a[0]);
  const ufa = new UnionFind(n + 1);
  const ufb = new UnionFind(n + 1);
  let count = 0;
  
  for (let [type, u, v] of edges) {
    if (type === 3) count += (ufa.union(u, v) | ufb.union(u, v));
    else if (type === 2) count += ufb.union(u, v);
    else count += ufa.union(u, v);
  }
  
  return ufa.allUnited() && ufb.allUnited() ? edges.length - count : -1;
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

  allUnited() {
    return this.count === 2;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

    this.parent[rootX] = rootY;
    this.count--;

    return true;
  }
}