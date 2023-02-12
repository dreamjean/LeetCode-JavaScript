/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  const n = roads.length + 1;
  const graph = Array.from({ length: n }, () => []);
  let ans = 0;
  
  for (let [x, y] of roads) {
    graph[x].push(y);
    graph[y].push(x);
  }
  
  const dfs = (curr, prev, people = 1) => {
    for (let next of graph[curr]) {
      if (next === prev) continue;
      
      people += dfs(next, curr);
    }
    
    if (curr) ans += Math.ceil(people / seats);
    
    return people;
  }
  
  dfs(0, -1);
  
  return ans;
};