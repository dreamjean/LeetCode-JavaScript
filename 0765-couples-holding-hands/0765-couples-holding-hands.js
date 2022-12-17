/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length / 2;
  const uf = new UnionFind(2 * n);
  
  for (let i = 0; i < 2 * n; i += 2) {
    uf.union(~~(row[i] / 2), ~~(row[i + 1] / 2));
  }

  return 2 * n - uf.count;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
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
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    
    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX]
    }
    else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY]
    }
    this.count--;
  }
}