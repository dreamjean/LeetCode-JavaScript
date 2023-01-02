/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function(n, restrictions, requests) {
  const uf = new UnionFind(n);
  const ans = [];
  
  for (let [u, v] of requests) {
    let can = true;
    
    if (uf.connected(u, v)) {
      ans.push(can);
      continue;
    }
    
    for (let [x, y] of restrictions) {
      if ((uf.connected(u, x) && uf.connected(v, y)) || (uf.connected(u, y) && uf.connected(v, x))) {
        can = false;
        break;
      }
    }
    
    ans.push(can);
    if (can) uf.union(u, v);
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

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += rootX;
    } else {
      parent[rootY] = rootX;
      size[rootX] += rootY;
    }
  }
}