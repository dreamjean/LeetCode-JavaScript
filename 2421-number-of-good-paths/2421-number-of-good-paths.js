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
  
  for (let [u, v] of edges) {
    const maxVal = Math.max(vals[u], vals[v]);
    adj[maxVal].push([u, v]);
  }
  
  for (let [val, indexs] of Object.entries(map)) {
    adj[val].forEach(([u, v]) => uf.union(u, v));
    
    const group = {};
    indexs.forEach((i) => {
      const root = uf.find(i);
      group[root] ? group[root]++ : group[root] = 1; 
    })
    
    ans += Object.values(group).reduce((acc, curr) => acc + ~~((curr - 1) * curr / 2), 0);
  }
  
  return ans;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
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

    rootX > rootY 
      ? this.parent[rootX] = rootY
      : this.parent[rootY] = rootX;
  }
}

