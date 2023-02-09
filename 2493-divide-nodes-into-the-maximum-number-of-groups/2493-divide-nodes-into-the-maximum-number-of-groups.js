/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const map = {};
  
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  })
  
  for (let i = 1; i <= n; i++) {
    const leave = new Array(n + 1).fill(0);
    const queue = [[i, 1]];
    let [smallIndex, maxDepth] = [Infinity, 0];
    leave[i] = 1;
    
    while (queue.length) {
      const [curr, depth] = queue.shift();
      smallIndex = Math.min(smallIndex, curr);
      maxDepth = Math.max(maxDepth, depth);
      
      for (let next of graph[curr]) {
        if (leave[next] === depth) return -1;
        
        if (!leave[next]) {
          leave[next] = depth + 1;
          queue.push([next, depth + 1]);
        }
      }
    }
    
    map[smallIndex] = Math.max(map[smallIndex] || 0, maxDepth);
  }
  
  return [...Object.values(map)].reduce((a, b) => a + b);
};