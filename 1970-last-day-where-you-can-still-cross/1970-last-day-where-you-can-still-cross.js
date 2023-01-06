/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
  cells = cells.map(([x, y]) => [x - 1, y - 1]);
  const uf = new UnionFind(row * col + 2);
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const grid = Array.from({ length: row }, () => new Array(col).fill(1));
  const last = row * col + 1;
  
  for (let i = cells.length - 1; i >= 0; i--) {
    const [x, y] = cells[i];
    const pos1 = mark(x, y, col);
    grid[x][y] = 0;
    
    for (let [dx, dy] of dirs) {
      const [nx, ny] = [dx + x, dy + y];
      const pos2 = mark(nx, ny, col);
      if (nx >= 0 && nx < row && ny >= 0 && ny < col && !grid[nx][ny])
        uf.union(pos1, pos2);
    }
    
    if (!x) uf.union(0, pos1);
    if (x === row - 1) uf.union(last, pos1);
    if (uf.connected(0, last)) return i;
  }
  
  return 0;
};
  
const mark = (x, y, n) => x * n + y + 1;

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
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX];
    } else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY];
    }
  }
}