/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const ans = [];

  const dfs = (i = 0, path = [0]) => {
    if (i === n - 1) return ans.push([...path]);

    for (let next of graph[i]) dfs(next, [...path, next]);
  };

  dfs();

  return ans;
};
