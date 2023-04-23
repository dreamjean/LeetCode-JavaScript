/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const [m, n] = [s.length, p.length];
  let [i, j, iStart, jStart] = [0, 0, -1, -1];
  
  while (i < m) {
    if (j < n && (s[i] === p[j] || p[j] === '?')) {
      ++i;
      ++j;
    } 
    
    else if (j < n && p[j] === '*') {
      iStart = i;
      jStart = j++;
    }
    
    else if (iStart >= 0) {
      i = ++iStart;
      j = jStart + 1;
    }
    
    else return false;
  }
  
  while (j < n && p[j] === '*') j++;
  
  return j === n;
};