/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const ans = [];
  let j = 0;
  
  for (let ch of s) {
    if (ch === '*') j--;
    else ans[j++] = ch;
  }
  
  return ans.slice(0, j).join('');
};