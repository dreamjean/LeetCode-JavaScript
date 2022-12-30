/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length;
  const queue = [[0, [0]]];
  const ans = [];
  
  while (queue.length) {
    const [curr, path] = queue.shift();
    if (curr === n - 1) ans.push(path);
    
    graph[curr].forEach((next) => queue.push([next, [...path, next]]));
  }
  
  return ans;
};