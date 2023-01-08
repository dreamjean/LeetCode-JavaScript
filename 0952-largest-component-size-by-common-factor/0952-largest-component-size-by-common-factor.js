/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function(nums) {
  const max = Math.max(...nums);
  const uf = new UnionFind(max + 1);
  const count = new Array(max + 1).fill(0);
  
  for (let num of nums) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) {
        uf.union(num, i);
        uf.union(num, num / i);
      }
    }
  }
  
  return nums.reduce((acc, curr) => acc = Math.max(acc, ++count[uf.find(curr)]), 0);
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