/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  edges = edges.map((edge, i) => [...edge, i]).sort((a, b) => a[2] - b[2]);
  const mst = buildMST(edges, n);
  const critical = [];
  const pseudoCritical = [];
  
  for (let i = 0; i < edges.length; i++) {
    if (mst < buildMST(edges, n, i)) critical.push(edges[i][3]);
    else if (mst === buildMST(edges, n, -1, i)) pseudoCritical.push(edges[i][3]);
  }
  
  return [critical, pseudoCritical];
};

const buildMST = (edges, n, skip = -1, pick = -1) => {
  const uf = new UnionFind(n);
  let weight = 0;
  
  if (pick > -1) {
    const [u, v, w] = edges[pick];
    uf.union(u, v);
    weight += w;
  }
  
  for (let i = 0; i < edges.length; i++) {
    if (i === skip) continue;
    
    const [u, v, w] = edges[i];
    if (uf.union(u, v)) weight += w;
  }
  
  return uf.getCount() === 1 ? weight : Infinity;
}

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
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
    if (rootX === rootY) return false;
    
    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX];
    } else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY];
    }
    
    this.count--;
    
    return true;
  }
}