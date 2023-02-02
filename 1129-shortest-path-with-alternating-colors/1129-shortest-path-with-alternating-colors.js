/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const grid = Array.from({ length: n }, () => [[], []]);
  const visited = [new Set(), new Set()];
  const queue = [[0, 0], [0, 1]]; // red: 0, blue: 1
  const ans = new Array(n).fill(-1);
  let depth = 0;
  
  redEdges.forEach(([x, y]) => grid[x][0].push(y));
  blueEdges.forEach(([x, y]) => grid[x][1].push(y));
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [currNode, currColor] = queue.shift();
      if (ans[currNode] === -1) ans[currNode] = depth;
      
      const nextColor = !currColor ? 1 : 0;
      grid[currNode][currColor].forEach((nextNode) => {
        if (!visited[currColor].has(nextNode)) {
          visited[currColor].add(nextNode);
          queue.push([nextNode, nextColor]);
        }
      })
    }
    
    depth++;
  }
  
  return ans;
};