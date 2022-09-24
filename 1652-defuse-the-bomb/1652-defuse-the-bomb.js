/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  if (!k) return code.map(num => num = 0);
  
  const n = code.length;
  const sums = [...code, ...code].reduce((acc, curr, i) => (i > 0 && acc.push(acc.at(-1) + curr), acc), [code[0]]);
  const ans = [];
  
  for (let i = 0; i < 2 * n; i++) {
    if (k > 0 && i < n) ans.push(sums[i + k] - sums[i]);
    if (k < 0 && i >= n - 1 && i < 2 * n - 1) ans.push(sums[i] - sums[i + k]);
  }
  
  return ans;
};