/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1;
  
  const map = new Map();
  
  const dfs = (i, d) => {
    const key = `${i}-${d}`;
    if (d === 1) return Math.max(...jobDifficulty.slice(i));
    if (key in map) return map[key];
    
    let [res, max] = [Infinity, 0];
    
    for (let j = i; j <= n - d; ++j) {
      max = Math.max(max, jobDifficulty[j]);
      res = Math.min(res, max + dfs(j + 1, d - 1));
    }
    
    return map[key] = res;
  }
  
  return dfs(0, d)
};