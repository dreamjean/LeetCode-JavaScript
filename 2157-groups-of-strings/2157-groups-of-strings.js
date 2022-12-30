/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function(words) {
  const n = words.length;
  const uf = new UnionFind(n);
  const states = new Array(n).fill(0);
  const map = new Map();
  let maxSize = 0;
  
  for (let i = 0; i < n; i++) {
    let state = 0;
    for (let ch of words[i]) 
      state |= 1 << (ch.charCodeAt() - 'a'.charCodeAt());
    
    states[i] = state;
    if (!map.has(state)) map.set(state, i);
    uf.union(i, map.get(state));
    
  }
  
  for (let i = 0; i < n; i++) {
    let state = states[i];
    for (let j = 0; j < 26; j++) {
      if (!((state >> j) & 1)) continue;
      
      const newState = state ^ (1 << j);
      if (!map.has(newState)) map.set(newState, i);
      uf.union(i, map.get(newState));
      
    }
  }
  
  for (let i = 0; i < n; i++) maxSize = Math.max(maxSize, uf.getSize(i));
  
  return [uf.getCount(), maxSize];
};

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
  
  getSize(x) {
    return this.size[this.find(x)];
  }
  
  getCount(x) {
    return this.count;
  }
  
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    
    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX];
    } else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY];
    }
    
    this.count--;
  }
}