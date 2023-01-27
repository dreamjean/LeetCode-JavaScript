/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const set = new Set(s);
  
  for (let i = 90; i >= 65; i--) {
    const upper = String.fromCharCode(i);
    const lower = String.fromCharCode(i + 32);
    if (set.has(upper) && set.has(lower)) return upper;
  }
  
  return '';
};