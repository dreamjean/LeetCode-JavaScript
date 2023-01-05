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
  const map = vals.reduce((acc, curr, i) => (acc[curr] ? acc[curr].push(i) : acc[curr] = [i], acc), {});
  let ans = n;
  
  for (let [u, v] of edges) {
    const max = Math.max(vals[u], vals[v]);
    adj[max].push([u, v]);
  }

  for (let [val, indexs] of Object.entries(map)) {
    adj[val].forEach(([u, v]) => uf.union(u, v));
    
    const count = {};
    indexs.forEach((i) => {
      const root = uf.find(i);
      count[root] ? count[root]++ : count[root] = 1;
    });
    
    for (let num of Object.values(count)) ans += num * (num - 1) / 2;
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