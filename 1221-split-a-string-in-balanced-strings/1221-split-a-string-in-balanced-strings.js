/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let [count, res] = [0, 0];
  
  for (let c of s) {
    c === 'R' ? ++count : --count;
    if (!count) res++;
  }
  
  return res;
};