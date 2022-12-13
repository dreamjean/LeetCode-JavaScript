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
  const m = queries.length;
  const ans = new Array(m);
  let j = 0;
  
  for (let [p, q, limit, i] of queries) {
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const [u, v, _] = edgeList[j++];
      uf.union(u, v);
    }
    
    ans[i] = uf.isConnect(p, q);
  }
  
  return ans;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  
  find(x) {
    if (x !== this.parent[x]) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  
  isConnect(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootX] = rootY;
  }
}