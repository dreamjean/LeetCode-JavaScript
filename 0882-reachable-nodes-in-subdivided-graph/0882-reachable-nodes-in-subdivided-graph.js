/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
  const graph = Array.from({ length: n }, () => []);
  const pq = new MinPriorityQueue({ priority: x => x[1] });
  const badge = new Array(n).fill(Infinity);
  let ans = 0;
  
  pq.enqueue([0, 0]);
  badge[0] = 0;
  
  for (const [u, v, cnt] of edges) {
    graph[u].push([v, cnt + 1]);
    graph[v].push([u, cnt + 1]);
  }
  
  while (!pq.isEmpty()) {
    const [curr, cnt1] = pq.dequeue().element;
    for (let [next, cnt2] of graph[curr]) {
      const cnt = cnt1 + cnt2;
      if (badge[next] > cnt) {
        badge[next] = cnt;
        pq.enqueue([next, cnt]);
      }
    }
  }
  
  for (let [u, v, cnt] of edges) {
    const moveFromU = Math.max(maxMoves - badge[u], 0);
    const moveFromV = Math.max(maxMoves - badge[v], 0);
    const total = moveFromU + moveFromV;
    ans += total - Math.max(total - cnt, 0);
  }
  
  return ans + badge.reduce((acc, curr) => acc + (curr <= maxMoves), 0);
};