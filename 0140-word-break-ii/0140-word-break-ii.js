/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const n = s.length;
  const ans = [];
  
  const dfs = (start = 0, path = []) => {
    if (start === n) {
      ans.push(path.join(' '));
      return;
    }
    
    for (let i = start; i < n; i++) {
      const sub = s.substring(start, i + 1);
      if (set.has(sub)) dfs(i + 1, [...path, sub]);
    }
  }
  
  dfs();
  
  return ans;
};