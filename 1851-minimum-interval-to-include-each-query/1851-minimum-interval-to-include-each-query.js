/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  queries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  const pq = new MinPriorityQueue({ priority: x => x[0] });
  const [m, n] = [intervals.length, queries.length];
  const ans = new Array(n).fill(-1);
  let j = 0;
  
  for (let [query, i] of queries) {
    while (j < m && intervals[j][0] <= query) {
      const [l, r] = intervals[j++];
      pq.enqueue([r - l + 1, r]);
    }
    
    while (!pq.isEmpty() && pq.front().element[1] < query) 
      pq.dequeue();
    
    if (!pq.isEmpty()) ans[i] = pq.front().element[0];
  }
  
  return ans;
};