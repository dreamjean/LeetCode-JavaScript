/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const colors = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
    if (colors[i]) continue;
    
    colors[i] = 1;
    const queue = [i];
    
    while (queue.length) {
      const curr = queue.shift();
      for (let next of graph[curr]) {
        if (!colors[next]) {
          colors[next] = -colors[curr] ^ 1;
          queue.push(next);
        }
        else if (colors[next] === colors[curr]) return false;
      }
    }
  }
  
  return true;
};