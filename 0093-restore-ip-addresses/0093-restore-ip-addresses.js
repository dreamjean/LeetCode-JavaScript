/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const n = s.length;
  const ans = [];
  
  const backtract = (start = 0, path = []) => {
    if (start === n && path.length === 4) ans.push(path.join('.'));
    
    let num = '';
    for (let i = start; i < n; i++) {
      num += s[i];
      const m = num.length;
      if ((m > 1 && num.startsWith('0') || num.length > 3 || +num > 255)) continue;
      
      backtract(i + 1, [...path, +num]);
    }
  }
  
  backtract();
  
  return ans;
};