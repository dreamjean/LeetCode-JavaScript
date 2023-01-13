/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  let ans = 0;
  
  for (let i = 1; i < n; i++) children[parent[i]].push(i);
  
  const dfs = (curr) => {
    let [maxDepth1, maxDepth2] = [0, 0];  

    for (let next of children[curr]) {
      const depth = dfs(next);
      if (s[next] === s[curr]) continue;
      
      if (depth > maxDepth1) [maxDepth1, maxDepth2] = [depth, maxDepth1];
      else if (depth > maxDepth2) maxDepth2 = depth;
    }

    ans = Math.max(ans, maxDepth1 + maxDepth2 + 1);

    return maxDepth1 + 1;
  }
    
  dfs(0);
  
  return ans;
};

