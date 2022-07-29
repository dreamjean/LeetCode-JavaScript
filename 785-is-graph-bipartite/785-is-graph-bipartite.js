/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length;
  const colors = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (colors[i]) continue;

    colors[i] = 1;
    const queue = [i];

    while (queue.length) {
      const node = queue[0];
      for (const next of graph[node]) {
        if (!colors[next]) {
          colors[next] = -colors[node];
          queue.push(next);
        } else if (colors[next] === colors[node]) return false;
      }

      queue.shift();
    }
  }

  return true;
};
