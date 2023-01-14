/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const uf = new UnionFind(m * n);
  
  for (let i = 0; i < m; i++) 
    for (let j = 0; j < n; j++)
      unionTopLeftAndBottomRight(i, j, grid, uf);
  
  return uf.connected(0, m * n - 1);
};

const mark = (x, y, n) => x * n + y;

const unionTopLeftAndBottomRight = (x, y, grid, uf) => {
  const [m, n] = [grid.length, grid[0].length];
  const curr = grid[x][y];
  const pos = mark(x, y, n);
  
  if ([1, 4, 6].includes(curr) && y < n - 1 && [1, 3, 5].includes(grid[x][y + 1]))
    uf.union(pos, mark(x, y + 1, n));
  
  if ([2, 3, 4].includes(curr) && x < m - 1 && [2, 5, 6].includes(grid[x + 1][y]))
    uf.union(pos, mark(x + 1, y, n));
}

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

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (rootX < rootY) this.parent[rootX] = rootY;
    else this.parent[rootY] = rootX;
  }
}