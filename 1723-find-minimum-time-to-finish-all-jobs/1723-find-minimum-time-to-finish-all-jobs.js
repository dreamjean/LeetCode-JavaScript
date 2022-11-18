/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
  const workers = new Array(k).fill(0);
  let ans = Number.MAX_VALUE;
  
  const dfs = (i = 0) => {
    if (i === jobs.length) return ans = Math.min(ans, Math.max(...workers));
    
    for (let j = 0; j < k; j++) {
      workers[j] += jobs[i];
      dfs(i + 1);
      workers[j] -= jobs[i];
      
      if (!workers[j]) break;
    }
  }
  
  dfs();
  
  return ans;
};