/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const n = matrix.length;
  let [low, high] = [matrix[0][0], matrix[n - 1][n - 1]];
  
  while (low < high) {
    const mid = low + ((high - low) >> 1);
    if (countSmallest(matrix, n, mid) < k) low = mid + 1;
    else high = mid;
  }
  
  return low;
};

const countSmallest = (matrix, n, target) => {
  let [i, j, count] = [n - 1, 0, 0];
  
  while (i >= 0 && j < n) {
    if (matrix[i][j] <= target) {
      count += i + 1;
      j++; 
    }
    else i--;
  }
  
  return count;
}