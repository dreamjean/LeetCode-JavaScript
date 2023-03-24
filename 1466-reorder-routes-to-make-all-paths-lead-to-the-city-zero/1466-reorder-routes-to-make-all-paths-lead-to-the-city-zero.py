/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const graph = Array.from({ length: n }, () => []);
  const set = new Set();
  let count = 0;
  
  connections.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
    set.add(`${a}-${b}`);
  })
  
  const dfs = (curr = 0, prev = -1) => {
    if (set.has(`${prev}-${curr}`)) count++;
    
    graph[curr].forEach((next) => next !== prev && dfs(next, curr));
  }
  
  dfs();
  
  return count;
};