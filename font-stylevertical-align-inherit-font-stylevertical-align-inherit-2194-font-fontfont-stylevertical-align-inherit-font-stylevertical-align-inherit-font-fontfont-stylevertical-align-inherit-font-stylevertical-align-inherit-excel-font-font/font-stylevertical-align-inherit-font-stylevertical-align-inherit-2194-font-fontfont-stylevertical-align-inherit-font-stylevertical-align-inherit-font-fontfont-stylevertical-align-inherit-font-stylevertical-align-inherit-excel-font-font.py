/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  const ans = [];
  
  for (let c = s[0].charCodeAt(); c <= s[3].charCodeAt(); c++) {
    for (let i = s[1]; i <= s[4]; i++) {
      ans.push(String.fromCharCode(c) + i);
    }
  }
  
  return ans;
};