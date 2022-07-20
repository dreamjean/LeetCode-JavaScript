/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const ans = [];

  const backtrack = (curr = 0, path = [0]) => {
    if (curr === n - 1) return ans.push([...path]);

    for (const next of graph[curr]) backtrack(next, [...path, next]);
  };

  backtrack();

  return ans;
};
