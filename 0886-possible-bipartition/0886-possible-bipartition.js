/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = Array.from({ length: n }, () => []);
  const color = new Array(n).fill(0);
  
  dislikes.forEach(([a, b]) => {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  })
  
  for (let i = 0; i < n; i++) {
    if (color[i]) continue;
    
    color[i] = 1;
    const queue = [i];
    
    while (queue.length) {
      const curr = queue.shift();
      for (let next of graph[curr]) {
        if (!color[next]) {
          color[next] = -color[curr] ^ 1;
          queue.push(next);
        }
        
        else if (color[next] === color[curr]) return false;
      }
    }
  }
  
  return true;
};