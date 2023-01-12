/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  const grid = Array.from({ length: n }, () => []);
  const ans = new Array(n).fill(0);
  
  edges.forEach(([a, b]) => {
    grid[a].push(b);
    grid[b].push(a);
  });
  
  const dfs = (prev, curr) => {
    const cnt = new Array(26).fill(0);
    
    for (let next of grid[curr]) {
      if (next === prev) continue;
      
      const preCnt = dfs(curr, next);
      for (let i = 0; i < 26; i++) cnt[i] += preCnt[i];
    }
    
    ans[curr] = ++cnt[labels.charCodeAt(curr) - 'a'.charCodeAt()];
    
    return cnt;
  }
  
  dfs(-1, 0);
  
  return ans;
};