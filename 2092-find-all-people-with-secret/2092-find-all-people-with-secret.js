/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  const m = meetings.length;
  const ans = [0];
  uf.union(0, firstPerson);
  
  for (let i = 0; i < m; i++) {
    const set = new Set();
    let j = i;
    while (j < m && meetings[j][2] === meetings[i][2]) {
      const [x, y] = meetings[j++];
      uf.union(x, y);
      set.add(x);
      set.add(y);
    }
    
    for (let num of set) 
      if (!uf.connected(0, num)) uf.reset(num);
    
    i = j - 1;
  }
  
  for (let i = 1; i < n; i++) 
    if (uf.connected(0, i)) ans.push(i);
  
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

  reset(x) {
    return this.parent[x] = x;
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