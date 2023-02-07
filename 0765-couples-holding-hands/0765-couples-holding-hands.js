/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length / 2;
  const uf = new UnionFind(n);
  
  for (let i = 0; i < n * 2; i += 2) {
    uf.union(~~(row[i] / 2), ~~(row[i + 1] / 2));
  }
  
  return uf.getCount();
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = 0;
  }

  find(x) {
    const { parent } = this;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }

    return x;
  }

  getCount() {
    return this.count;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    this.parent[rootX] = rootY; 
    this.count++;
  }
}