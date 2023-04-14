/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
  const graph = Array.from({ length: n }, () => []);
  const ans = new Array(n);
  
  for (let [x, y] of paths) {
    graph[x - 1].push(y - 1);
    graph[y - 1].push(x - 1);
  }
  
  for (let i = 0; i < n; i++) {
    const used = new Array(5).fill(false);
    graph[i].forEach((j) => used[ans[j]] = true);
    
    for (let c = 1; c < 5; c++) {
      if (!used[c]) {
        ans[i] = c;
        break;
      }
    }
  }
  
  return ans;
};