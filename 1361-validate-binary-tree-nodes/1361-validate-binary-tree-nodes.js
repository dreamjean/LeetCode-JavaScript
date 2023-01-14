/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  const uf = new UnionFind(n);
  
  for (let i = 0; i < n; i++) {
    const [left, right] = [leftChild[i], rightChild[i]];
    if (left > -1 && !uf.union(i, left)) return false;
    if (right > -1 && !uf.union(i, right)) return false;
  }
  
  return uf.getCount() === 1;
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

  getCount() {
    return this.count;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY || rootY !== y) return false;

    this.parent[rootY] = rootX;
    this.count--;
    return true;
  }
}