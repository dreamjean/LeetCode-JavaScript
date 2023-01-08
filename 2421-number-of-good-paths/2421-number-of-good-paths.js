/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
  const n = vals.length;
  const uf = new UnionFind(n);
  const max = Math.max(...vals);
  const adj = Array.from({ length: max + 1 }, () => []);
  const map = {};
  let ans = n;
  
  vals.forEach((val, i) => map[val] ? map[val].push(i) : map[val] = [i]);
  
  for (let [a, b] of edges) {
    const max = Math.max(vals[a], vals[b]);
    adj[max].push([a, b]);
  }
  
  for (let [num, indexs] of Object.entries(map)) {
    adj[num].forEach(([a, b]) => uf.union(a, b));
    
    const group = {};
    for (let i of indexs) {
      const root = uf.find(i);
      group[root] ? group[root]++ : group[root] = 1;
      
    }
    
    ans += Object.values(group).reduce((acc, curr) => acc + (curr - 1) * curr / 2, 0);
  }
  
  return ans;
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
  
  getSize(x) {
    return this.size[this.find(x)]
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