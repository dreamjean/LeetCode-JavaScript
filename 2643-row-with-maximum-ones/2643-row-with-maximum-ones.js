/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  let [index, max] = [0, 0];
  
  for (let i = 0; i < m; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      cnt += mat[i][j];
    }
    
    if (cnt > max) {
      index = i;
      max = cnt;
    }
  }
  
  return [index, max];
};