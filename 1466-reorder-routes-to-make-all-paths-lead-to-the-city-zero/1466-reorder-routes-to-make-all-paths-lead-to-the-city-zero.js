/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const graph = Array.from({ length: n }, () => []);
  const set = new Set();
  let count = 0;

  const dfs = (curr = 0, parent = -1) => {
    if (set.has(`${parent}-${curr}`)) count++;

    for (let next of graph[curr]) 
      if (next !== parent) dfs(next, curr);
  };

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
    set.add(`${u}-${v}`);
  }

  dfs();

  return count;
};
