/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const map = {};
  
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  
  for (let i = 1; i <= n; i++) {
    const leave = new Array(n + 1).fill(0);
    const queue = [[i, 1]];
    let [maxDepth, smallestIdx] = [0, Infinity];
    leave[i] = 1;
    
    while (queue.length) {
      const [curr, depth] = queue.shift();
      maxDepth = Math.max(maxDepth, depth);
      smallestIdx = Math.min(smallestIdx, curr);
      
      for (let next of graph[curr]) {
        if (leave[next] === depth) return -1;
        if (!leave[next]) {
          leave[next] = depth + 1;
          queue.push([next, depth + 1])
        }
      }
    }
    
    map[smallestIdx] = Math.max(map[smallestIdx] || 0, maxDepth);
  }
  
  return Object.values(map).reduce((a, b) => a + b);
};