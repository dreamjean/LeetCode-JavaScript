/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const [m, n, k] = [grid.length, grid[0].length, hits.length];
  const uf = new UnionFind(m * n + 1);
  const ans = new Array(k).fill(0);
  
  hits.forEach(([r, c]) => {
    if (grid[r][c] === 1) grid[r][c] = 2;
  })
  
  for (let i = 0; i < m; i++) 
    for (let j = 0; j < n; j++) 
      if (grid[i][j] === 1) unionAround(i, j, grid, uf);
  
  for (let t = k - 1; t >= 0; t--) {
    const [x, y] = hits[t];
    if (grid[x][y] === 2) {
      grid[x][y] = 1;
      let originBricks = uf.getSize(0);
      unionAround(x, y, grid, uf);
      const currBricks = uf.getSize(0);
    
      ans[t] = Math.max(0, currBricks - originBricks - 1);
    }    
  }
    
  return ans;
};

const mark = (x, y, n) => x * n + y + 1;

const unionAround = (x, y, grid, uf) => {
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const [m, n] = [grid.length, grid[0].length];
  const pos = mark(x, y, n);
  if (!x) uf.union(0, pos);
  
  for (let [dx, dy] of dirs) {
    const [nx, ny] = [dx + x, dy + y];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1)
      uf.union(pos, mark(nx, ny, n));
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

    return x;
  } 

  getSize(x) {
    return this.size[this.find(x)];
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