/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  const [m, n] = [strs.length, strs[0].length];
  let count = 0;
  
  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      const [prev, curr] = [strs[i - 1].charCodeAt(j), strs[i].charCodeAt(j)];
      if (prev > curr) {
        count++;
        break;
      }
    }    
  }
  
  return count;
};