/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  const n = edges.length;
  const graph = Array.from({ length: n }, () => [-1, -1]);
  let ans = -1;
  
  for (let i = 0; i < n; i++) {
    for (let j = i, dist = 0; j !== -1; j = edges[j]) {
      const [dist_v, from] = graph[j];
      if (dist_v === -1) graph[j] = [dist++, i];
      else {
        if (from === i) ans = Math.max(ans, dist - dist_v);
        break;
      }
    }
  }
  
  return ans;
};