/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let ans = 0;
  
  const dfs = (start, path) => {
    if (path.length !== new Set(path).size) return;
    
    ans = Math.max(ans, path.length);
    
    for (let i = start; i < arr.length; i++) {
      dfs(i + 1, `${path}${arr[i]}`);
    }
  }
  
  dfs(0, '');
  
  return ans;
};

