/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const colors = {};

  const dfs = (i, color) => {
    if (i in colors) return colors[i] === color;

    colors[i] = color;

    for (const next of graph[i]) if (!dfs(next, !color)) return false;

    return true;
  };

  for (let i = 0; i < graph.length; i++)
    if (!(i in colors) && !dfs(i, true)) return false;

  return true;
};
