/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
  let [curr, i, j] = [0, 0, 0];
  
  while (curr < n) {
    i += ++j;
    curr += i;
  }
  
  if (curr === n) return i;
  
  curr -= i;
  i -= j;
  j = 0;
  
  while (curr < n) curr += ++j;
  
  return i + j;
};