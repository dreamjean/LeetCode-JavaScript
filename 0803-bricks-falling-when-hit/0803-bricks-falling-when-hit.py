/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const [m, n, k] = [grid.length, grid[0].length, hits.length];
  const uf = new UnionFind(m * n + 1);
  const ans = new Array(k).fill(0);
  
  hits.forEach(([x, y]) => {
    if (grid[x][y] === 1) grid[x][y] = 2;
  })
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) unionAround(i, j, grid, uf)
    }
  }
  
  for (let i = k - 1; i >= 0; i--) {
    const [x, y] = hits[i];
    if (grid[x][y] !== 2) continue;
    
    grid[x][y] = 1;
    let originBricks = uf.componentSize(0);
    unionAround(x, y, grid, uf);
    let currBricks = uf.componentSize(0);
    ans[i] = Math.max(0, currBricks - originBricks - 1);
    
    originBricks = currBricks;
  }
  
  return ans;
};

const mark = (x, y, n) => x * n + y + 1;

const unionAround = (x, y, grid, uf) => {
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const [m, n] = [grid.length, grid[0].length];
  const currMark = mark(x, y, n);
  
  if (!x) uf.union(0, currMark);
  
  for (let [dx, dy] of dirs) {
    const [nx, ny] = [dx + x, dy + y];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1)
      uf.union(currMark, mark(nx, ny, n));
  }
}

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
  }
  
  find(x) {
    if (x !== this.parent[x]) this.parent[x] = this.find(this.parent[x]);
    
    return this.parent[x];
  }
  
  componentSize(x) {
    let root = this.find(x);
    return this.size[root];
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return;
    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    }
    else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    }
  }
}