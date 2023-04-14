/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
  const pq = new MaxPriorityQueue({ priority: x => x[0] });
  let ans = -Infinity;
  
  for (let [x, y] of points) {
    while (!pq.isEmpty() && pq.front().element[1] < x - k) pq.dequeue();
    
    if (!pq.isEmpty()) ans = Math.max(ans, pq.front().element[0] + x + y);
    
    pq.enqueue([y - x, x]);
  }
  
  return ans;
};