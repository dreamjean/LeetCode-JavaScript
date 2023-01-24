/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const n = queries.length;
  const ans = new Array(n).fill(0);
  
  queries.forEach(([x, y, r], i) => { 
    for (let [qx, qy] of points) {
      ans[i] += ((x - qx) ** 2 + (y - qy) ** 2 <= r ** 2);
    }
  })
  
  return ans;
};