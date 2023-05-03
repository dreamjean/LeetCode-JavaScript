/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, queries) {
  const ans = [];
  
  for (let [a, b] of queries) {
    let cnt = 1;
    while (a !== b) {
      a > b ? a = Math.floor(a / 2) : (b = Math.floor(b / 2));
      cnt++;
    }
      
    ans.push(cnt);
  }
  
  return ans;
};