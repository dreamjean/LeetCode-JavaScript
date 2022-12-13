/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const n = strs.length;
  const uf = new UnionFind(n);
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) uf.union(i, j);
    }
  }
  
  return uf.count;
};

const isSimilar = (str1, str2) => {
  let cnt = 0;
  
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] && ++cnt > 2) return false;
  }
  
  return true;
}

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = n;
  }
  
  find(x) {
    if (x !== this.parent[x]) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      this.count--;
    }
  }
}