/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
  const n = colors.length;
  const count = Array.from({ length: n }, () => new Array(26).fill(0));
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  const queue = [];
  const a = 'a'.charCodeAt();
  let [max, processed] = [0, 0];
  
  edges.forEach(([u, v]) => {
    graph[u].push(v);
    indegree[v]++;
  });
  
  for (let i = 0; i < n; i++) {
    if (!indegree[i]) {
      queue.push(i);
      count[i][colors.charCodeAt(i) - a]++;
    }
  }
  
  while (queue.length) {
    const u = queue.shift();
    max = Math.max(max, count[u][colors.charCodeAt(u) - a]);
    processed++;
    
    for (let v of graph[u]) {
      for (let i = 0; i < 26; i++)
        count[v][i] = Math.max(count[v][i], count[u][i] + (colors.charCodeAt(v) - a === i));
      
      if (--indegree[v] === 0) queue.push(v);
    }
  }
  
  return processed < n ? -1 : max;
};