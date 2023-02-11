/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const grid = Array.from({ length: n }, () => [[], []]);
  const visited = [new Set([0]), new Set([0])];
  const queue = [[0, 0], [0, 1]];
  const ans = new Array(n).fill(-1);
  let step = 0;
  
  redEdges.forEach(([a, b]) => grid[a][0].push(b));
  blueEdges.forEach(([a, b]) => grid[a][1].push(b));
  
  while (queue.length) {
    const size = queue.length;
    
    for (let i = 0; i < size; i++) {
      const [currNode, currColor] = queue.shift();
      if (ans[currNode] === -1) ans[currNode] = step;
      
      const nextColor = currColor ^ 1;
      for (let next of grid[currNode][currColor]) {
        if (visited[nextColor].has(next)) continue;
        
        visited[nextColor].add(next);
        queue.push([next, nextColor])
      }
    }
    
    step++;
  }
  
  return ans;
};