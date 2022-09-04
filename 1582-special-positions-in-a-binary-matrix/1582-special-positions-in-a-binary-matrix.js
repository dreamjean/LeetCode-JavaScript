/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rows[i]++;
        cols[j]++;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) count++;
    }
  }

  return count;
};
