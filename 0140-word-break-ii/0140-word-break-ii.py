/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const n = s.length;
  const ans = [];
  
  const dfs = (start, path) => {
    if (start === n) return ans.push([...path].join(' '));
    
    for (let i = start; i < n; i++) {
      const sub = s.substring(start, i + 1);
      if (!set.has(sub)) continue;
      
      dfs(i + 1, [...path, sub]);
    }
  }
  
  dfs(0, []);
  
  return ans;
};