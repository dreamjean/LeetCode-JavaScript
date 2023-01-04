/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  maxSum -= n
  let [left, right] = [1, maxSum];
  
  while (left <= right) {
    const mid = (left + right) >>> 1;
    if (check(n, index, mid, maxSum)) left = mid + 1;
    else right = mid - 1;
  }
  
  return left;
};

const check = (n, index, a, target) => {
  let b = Math.max(a - index, 0);
  let ans = Math.floor((a + b) * (a - b + 1) / 2);
  b = Math.max(a - (n - 1 - index), 0)
  ans += Math.floor((a + b) * (a - b + 1) / 2)
  
  return ans - a <= target;
}