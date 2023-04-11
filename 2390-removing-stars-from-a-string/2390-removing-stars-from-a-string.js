/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let ans = '';
  
  for (let ch of s) {
    if (ch === '*') ans = ans.slice(0, -1);
    else ans += ch;
  }
  
  return ans;
};