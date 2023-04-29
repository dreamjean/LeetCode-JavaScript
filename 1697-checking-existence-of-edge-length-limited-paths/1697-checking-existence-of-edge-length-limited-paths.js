/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2]);
  queries = queries.map((query, i) => [i, ...query]).sort((a, b) => a[3] - b[3]);
  const uf = new UnionFind(n);
  const ans = new Array(queries.length);
  let j = 0;
  
  for (let [i, p, q, limit] of queries) {
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const [u, v] = edgeList[j++];
      uf.union(u, v);
    }
    
    ans[i] = uf.isConnected(p, q);
  }
  
  return ans;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  
  find(x) {
    let parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    
    this.parent[rootX] = rootY;
  }
}