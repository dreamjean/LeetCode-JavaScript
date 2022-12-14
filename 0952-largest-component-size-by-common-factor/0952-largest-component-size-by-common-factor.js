/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function(nums) {
  const max = Math.max(...nums);
  const uf = new UnionFind(max + 1);
  const count = new Array(max + 1).fill(0);
  
  for (let num of nums) {
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (!(num % j)) {
        uf.union(num, j);
        uf.union(num, num / j);
      }
    }
  }
  
  return nums.reduce((acc, curr) => acc = Math.max(acc, ++count[uf.find(curr)]), 0);
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
  }
  
  find(x) {
    if (x !== this.parent[x]) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    }
  }
}