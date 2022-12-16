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
      if (grid[i][j] === 1) unionAround(i, j, grid, uf);
    }
  }
  
  for (let i = k - 1; i >= 0; i--) {
    const [x, y] = hits[i];
    if (grid[x][y] === 2) {
      grid[x][y] = 1;
      
      let numBricks = uf.componentSize(0);
      unionAround(x, y, grid, uf);
      let currNumBricks = uf.componentSize(0);
      ans[i] = Math.max(0, currNumBricks - numBricks - 1);
      numBricks = currNumBricks;
    }
  }
  
  return ans;
};

const mark = (x, y, n) => x * n + y + 1;

const unionAround = (x, y, grid, uf) => {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const currMark = mark(x, y, n);
  
  if (!x) uf.union(0, currMark);
  
  for (let [dx, dy] of dirs) {
    const [nx, ny] = [dx + x, dy + y];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) uf.union(currMark, mark(nx, ny, n));
  }
}

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
    
    return parent[x];
  }
  
  componentSize(x) {
    let root = this.find(x);
    return this.size[root];
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
  }
}