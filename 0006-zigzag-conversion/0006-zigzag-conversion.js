/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  const ans = new Array(numRows).fill('');
  let [pos, direction] = [0, false];
  
  for (let i = 0; i < s.length; i++) {
    if (!(i % (numRows - 1))) direction = !direction;
    
    ans[pos] += s[i];
    direction ? pos++ : pos--;
  }
  
  return ans.join('');
};