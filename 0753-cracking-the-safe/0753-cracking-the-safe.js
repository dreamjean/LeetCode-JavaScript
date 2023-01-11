/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  const visited = new Set();
  let ans = '0'.repeat(n - 1);
  
  for (let i = 0; i < k ** n; i++) {
    let temp = ans.slice(ans.length - n + 1);
    for (let j = k - 1; j >= 0; j--) {
      if (!visited.has(temp + j)) {
        visited.add(temp + j);
        ans += j;
        break;
      }
    }
  }
  
  return ans;
};