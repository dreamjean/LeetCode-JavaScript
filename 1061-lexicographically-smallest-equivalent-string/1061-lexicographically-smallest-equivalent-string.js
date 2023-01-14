/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const uf = new UnionFind(26);
  const a = 'a'.charCodeAt();
  let ans = '';
  
  for (let i = 0; i < s1.length; i++) {
    const idx1 = s1.charCodeAt(i) - a;
    const idx2 = s2.charCodeAt(i) - a;
    uf.union(idx1, idx2);
  }
  
  for (let ch of baseStr) {
    const root = uf.find(ch.charCodeAt() - a);
    ans += String.fromCharCode(root + a);
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

    if (rootX > rootY) this.parent[rootX] = rootY;
    else this.parent[rootY] = rootX;
  }
}