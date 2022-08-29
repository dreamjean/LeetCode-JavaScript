/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const map = {};
  const [m, n] = [mat.length, mat[0].length];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = i - j;
      if (!(key in map)) {
        map[key] = new MinPriorityQueue();
        map[key].enqueue(mat[i][j]);
      }
      else map[key].enqueue(mat[i][j]);
    }
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = map[i - j].dequeue().element;
    }
  }
  
  return mat;
};