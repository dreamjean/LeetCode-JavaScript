/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2]);
  queries = queries.map((query, i) => [...query, i]).sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  const ans = new Array(queries.length);
  let j = 0;
  
  for (let [p, q, limit, i] of queries) {
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const [u, v] = edgeList[j++];
      uf.union(u, v);
    }
    
    ans[i] = uf.connected(p, q);
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

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
   
    rootX < rootY ? this.parent[rootX] = rootY : this.parent[rootY] = rootX;
  }
}