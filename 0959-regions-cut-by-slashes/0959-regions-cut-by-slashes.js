/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const n = grid.length;
  const parent = Array.from({ length: n * n * 4 }, (_, i) => i);
  let count = n * n * 4;
  
  const find = (x) => {
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  const union = (x, y) => {
    let rootX = find(x);
    let rootY = find(y);
    if (rootX !== rootY) {
      parent[rootX] = rootY;
      count--;
    }
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i) union(mark(i - 1, j, n, 2), mark(i, j, n, 0));
      if (j) union(mark(i, j - 1, n, 1), mark(i, j, n, 3));
      if (grid[i][j] !== '/') {
        union(mark(i, j, n, 1), mark(i, j, n, 0));
        union(mark(i, j, n, 3), mark(i, j, n, 2));
      }
      if (grid[i][j] !== '\\') {
        union(mark(i, j, n, 0), mark(i, j, n, 3));
        union(mark(i, j, n, 1), mark(i, j, n, 2));
      }
    }
  }
  
  return count;
};

const mark = (x, y, n, k) => (x * n + y) * 4 + k;