/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const seen = new Array(n).fill(0);

  const dfs = (i) => {
    if (seen[i]) return seen[i] === 1;

    seen[i] = -1;

    for (let next of graph[i]) if (!dfs(next)) return false;

    seen[i] = 1;

    return true;
  };

  return graph.reduce((acc, _, i) => (dfs(i) && acc.push(i), acc), []);
};
