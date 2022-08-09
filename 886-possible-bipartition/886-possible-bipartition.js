/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = Array.from({ length: n }, () => []);
  const colors = new Array(n).fill(0);
  
  for (const [a, b] of dislikes) {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  }
  
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
