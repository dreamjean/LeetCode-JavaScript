/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function(parents, nums) {
  const n = parents.length;
  const ans = new Array(n).fill(1);
  const children = Array.from({ length: n }, () => []);
  const max = Math.max(...nums);
  const visited = new Array(max + 1).fill(0);
  let i = nums.indexOf(1);
  let miss = 1;
  
  if (i === -1) return ans;
  
  for (let j = 1; j < n; j++) 
    children[parents[j]].push(j);
  
  const dfs = (curr) => {
    const num = nums[curr];
    if (visited[num]) return;
    
    visited[num] = 1;
    children[curr].forEach((next) => dfs(next));
  }
  
  while (i >= 0) {
    dfs(i);
    while (visited[miss]) miss++;
    ans[i] = miss;
    i = parents[i];
  }
  
  return ans;
};