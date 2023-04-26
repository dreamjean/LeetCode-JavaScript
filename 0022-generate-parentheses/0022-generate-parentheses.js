/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = [];
  
  const backtrack = (left, right, path = '') => {
    if (!left && !right) return ans.push(path);
    
    if (left) backtrack(left - 1, right, path + '(');
    if (right > left) backtrack(left, right - 1, path + ')');
  }
  
  backtrack(n, n);
  
  return ans;
};