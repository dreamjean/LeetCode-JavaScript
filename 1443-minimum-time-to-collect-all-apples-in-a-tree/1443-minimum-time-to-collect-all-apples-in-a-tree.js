/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const grid = Array.from({ length: n }, () => []);
  
  const dfs = (curr, prev) => {
    let ans = 0;
    
    for (let next of grid[curr]) {
      if (next === prev) continue;
      
      ans += dfs(next, curr);
    }
    
    return ans || hasApple[curr] ? ans + 2 : ans;
  }
  
  edges.forEach(([a, b]) => {
    grid[a].push(b);
    grid[b].push(a);
  })
  
  return Math.max(dfs(0, -1) - 2, 0);
};