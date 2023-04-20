/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const [m, n] = [matrix.length, matrix[0].length];
  let ans = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }
  
  for (let k = 0; k < n; k++) {
    for (let j = k; j < n; j++) {
      const map = new Map();
      map.set(0, 1);
      let sum = 0;
      
      for (let i = 0; i < m; i++) {
        sum += matrix[i][j] - (!k ? 0 : matrix[i][k - 1]);
        if (map.has(sum - target)) ans += map.get(sum - target);
        map.set(sum, (map.get(sum) || 0) + 1);
      }
    }
  }
  
  return ans;
};