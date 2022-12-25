/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const n = s.length;
  const uf = new UnionFind(n);
  const map = {};
  const ans = [];
  
  pairs.forEach(([a, b]) => uf.union(a, b)); 
  
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    map[root] ? map[root].push(s[i]) : map[root] = [s[i]];
  }
  
  Object.values(map).forEach((chars) => chars.sort((a, b) => b.charCodeAt() - a.charCodeAt()));
  
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    if (root in map) ans.push(map[root].pop());
  }
  
  return ans.join('');
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
    if (rootX !== rootY) this.parent[rootX] = rootY;
  }
}