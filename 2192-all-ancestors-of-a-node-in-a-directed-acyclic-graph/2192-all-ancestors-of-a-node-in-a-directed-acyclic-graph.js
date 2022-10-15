/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const ans = Array.from({ length: n }, () => []);
  
  edges.forEach(([u, v]) => graph[u].push(v));
  
  for (let i = 0; i < n; i++) {
    const set = new Set();
    const queue = [i];
    
    while (queue.length) {
      const curr = queue.shift();
      if (curr !== i) ans[curr].push(i);
      
      for (let next of graph[curr]) {
        if (set.has(next)) continue;
        
        set.add(next);
        queue.push(next);
      }
    }
  }
  
  return ans;
};