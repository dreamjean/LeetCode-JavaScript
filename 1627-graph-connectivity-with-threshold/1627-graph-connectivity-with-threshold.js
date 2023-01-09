/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  const uf = new UnionFind(n + 1);
  
  for (let i = threshold + 1; i <= n; i++) {
    if (uf.parentIsChanged(i)) continue;
    for (let j = i * 2; j <= n; j++) {
      if (!(j % i)) uf.union(j, i);
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
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  parentIsChanged(x) {
    return this.parent[x] !== x;
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
