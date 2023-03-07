/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  const set = new Set();
  
  const dfs = (exp) => {
    const j = exp.indexOf('}');
    if (j === -1) return set.add(exp);
    
    let i = j;
    while (exp[i] !== '{') --i;
    
    const prefix = exp.substring(0, i);
    const subfix = exp.substring(j + 1);
    const curr = exp.substring(i + 1, j).split(',');
    
    curr.forEach((ch) => dfs(prefix + ch + subfix));
  }
  
  dfs(expression);
  
  return [...set].sort();
};