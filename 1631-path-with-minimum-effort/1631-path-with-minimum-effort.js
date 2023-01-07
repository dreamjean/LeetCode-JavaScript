/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const [m, n] = [heights.length, heights[0].length];
  const uf = new UnionFind(m * n);
  const pq = new MinPriorityQueue({ priority: x => x[0] });
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = heights[i][j];
      const currPos = mark(i, j, n);
      if (i > 0) pq.enqueue(
        [Math.abs(curr - heights[i - 1][j]), currPos, mark(i - 1, j, n)]
      );
      if (j > 0) pq.enqueue(
        [Math.abs(curr - heights[i][j - 1]), currPos, mark(i, j - 1, n)]
      );
    }
  }
  
  while (!pq.isEmpty()) {
    const [diff, pos1, pos2] = pq.dequeue().element;
    uf.union(pos1, pos2);
    if (uf.connected(0, mark(m - 1, n -1, n))) return diff;
  }
  
  return 0;
};

const mark = (x, y, n) => x * n + y;

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
