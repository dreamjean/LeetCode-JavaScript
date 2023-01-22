/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const n = s.length;
  const ans = [];
  
  const dfs = (start = 0, temp = []) => {
    if (start === n) return ans.push([...temp]);
    
    for (let i = start; i < n; i++) {
      if (!isPalindrome(start, i, s)) continue;
      
      dfs(i + 1, [...temp, s.slice(start, i + 1)]);
    }
  }
  
  dfs();
  
  return ans;
};

const isPalindrome = (l, r, s) => {  
  while (l < r)
    if (s[l++] !== s[r--]) return false;
  
  return true;
}