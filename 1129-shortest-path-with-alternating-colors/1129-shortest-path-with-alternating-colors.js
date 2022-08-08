/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const graph = Array.from({ length: 2 }, () => Array.from({ length: n }, () => []));
  const seen = Array.from({ length: n }, () => [false, false]);
  const ans = new Array(n).fill(Infinity);
  const queue = [[0, 0, 0], [0, 0, 1]];

  for (const [x, y] of redEdges) graph[0][x].push(y);
  for (const [x, y] of blueEdges) graph[1][x].push(y);

  while (queue.length) {
    const [dist, curr, color] = queue.shift();
    ans[curr] = Math.min(ans[curr], dist);
    
    for (let next of graph[color][curr]) {
      if (seen[next][color]) continue;
      
      seen[next][color] = true;
      queue.push([dist + 1, next, color ^ 1]);
    }
  }

  return ans.map(val => val === Infinity ? -1 : val);
};