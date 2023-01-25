/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function(matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const rank = new Array(m + n).fill(0);
  const map = {};
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = matrix[i][j];
      map[curr] ? map[curr].push([i, j]) : map[curr] = [[i, j]];
    }
  }
  
  for (let key of Object.keys(map).sort((a, b) => +a - +b)) {
    const uf = new UnionFind();
    const indexs = map[key];
    indexs.forEach(([x, y]) => uf.union(x, y + m));

    for (let group of Object.values(uf.getGroup())) {
      let maxRank = 0;
      group.forEach((i) => maxRank = Math.max(maxRank, rank[i]));
      group.forEach((i) => rank[i] = maxRank + 1);
    }

    indexs.forEach(([x, y]) => matrix[x][y] = rank[x]);
  }
  return matrix;
};

class UnionFind {
  constructor() {
    this.parent = {};
  }

  find(x) {
    const parent = this.parent;
    if (!(x in parent)) parent[x] = x;

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

    const { parent } = this;
    rootX < rootY 
      ? parent[rootX] = rootY
      : parent[rootY] = rootX
  }

  getGroup() {
    const group = {};
    
    for (let i of Object.keys(this.parent)) {
      const root = this.find(i);
      group[root] ? group[root].push(+i) : group[root] = [+i];
    }

    return group;
  }
}