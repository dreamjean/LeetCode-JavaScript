/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
  const n = source.length;
  const uf = new UnionFind(n);
  const map = {};
  let count = 0;
  
  allowedSwaps.forEach(([a, b]) => uf.union(a, b));
  
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    const num = source[i];
    if (!(root in map)) map[root] = {};
    
    const store = map[root];
    store[num] ? store[num]++ : store[num] = 1;
  }
  
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    const num = target[i];
    !map[root][num] ? count++ : map[root][num]--;
  }
  
  return count;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(0);
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