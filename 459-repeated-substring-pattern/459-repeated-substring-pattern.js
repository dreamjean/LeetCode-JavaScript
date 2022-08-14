/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const ss = (s + s).slice(1, -1);
  
  return ss.includes(s);
};