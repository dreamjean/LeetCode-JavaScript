/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function(n, edges, price, trips) {
  const graph = Array.from({ length: n }, () => []);
  const count = new Array(n).fill(0);
  
  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  })
  
  trips.forEach(([start, end]) => dfs1(start, -1, end, count, graph));
  
  return Math.min(...dfs2(0, -1, count, price, graph));
};

const dfs1 = (u, father, end, count, graph) => {
  if (u === end) {
    count[u]++;
    return true;
  }
  
  for (let v of graph[u]) {
    if (v !== father && dfs1(v, u, end, count, graph)) {
      count[u]++;
      return true;
    }
  }
  
  return false;
}

const dfs2 = (u, father, count, price, graph) => {
  let full = count[u] * price[u];
  let half = Math.floor(full / 2);
  
  for (let v of graph[u]) {
    if (v !== father) {
      const [ff, hh] = dfs2(v, u, count, price, graph);
      full += Math.min(ff, hh);
      half += ff;
    }
  }
  
  return [full, half];
}