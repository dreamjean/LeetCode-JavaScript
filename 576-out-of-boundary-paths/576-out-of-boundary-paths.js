/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  return helper(m, n, maxMove, startRow, startColumn);  
};

const helper = (m, n, N, i, j, memo = new Map()) => {
    const mod = 1e9 + 7;
    const key = `${N}-${i}-${j}`;
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    
    if (memo.has(key)) return memo.get(key);    
    if (!N || isOutside) return +isOutside;
    
    memo.set(key, (
        helper(m, n, N - 1, i - 1, j, memo)
        + helper(m, n, N - 1, i + 1, j, memo)
        + helper(m, n, N - 1, i, j + 1, memo)
        + helper(m, n, N - 1, i, j - 1, memo)
    ) % mod);
    
    return memo.get(key);
}