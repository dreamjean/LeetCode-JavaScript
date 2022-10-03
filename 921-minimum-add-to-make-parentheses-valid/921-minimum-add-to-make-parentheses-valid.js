/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let [open, close] = [0, 0];
  
  for (let c of s) {
    if (c === '(') open++;
    else open ? open-- : close++;
  }
  
  return open + close;
};