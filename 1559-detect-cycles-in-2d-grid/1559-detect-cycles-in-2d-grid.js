/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
  const dirs = [[1, 0], [0, 1]];
  const [m, n] = [grid.length, grid[0].length];
  const uf = new UnionFind(m * n);
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const pos = mark(i, j, n);
      for (let [dx, dy] of dirs) {
        const [x, y] = [dx + i, dy + j];
        if (x >= m || y >= n || grid[x][y] !== grid[i][j]) continue;
        
        if (!uf.union(pos, mark(x, y, n))) return true;
      }
    }
  }
  
  return false;
};

const mark = (x, y, n) => x * n + y;

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
    if (rootX === rootY) return false;

    this.parent[rootX] = rootY;
    return true;
  }
}