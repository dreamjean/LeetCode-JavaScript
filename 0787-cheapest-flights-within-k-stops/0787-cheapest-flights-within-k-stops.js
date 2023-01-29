/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const adj = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(n + 1);
  const pq = new MinPriorityQueue({ priority: x => x[0] });
  pq.enqueue([0, src, 0]);
  
  flights.forEach(([start, end, price]) => adj[start].push([end, price]));
  
  while (!pq.isEmpty()) {
    const [total, curr, cost] = pq.dequeue().element;
    if (curr === dst) return total;
    if (cost === visited[curr] || cost > k) continue;
    
    visited[curr] = cost;
    for (let [next, price] of adj[curr]) {
      if (visited[next] === cost + 1) continue;
      pq.enqueue([total + price, next, cost + 1]);
    }
  }
  
  return -1;
};