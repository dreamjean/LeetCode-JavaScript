/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length;
  let [a, b] = [1, 1];
  
  if (s[0] === '0') return 0;
  if (n === 1) return 1;
  
  for (let i = 1; i < n; i++) {
    if (s[i] === '0') a = 0;
    if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= 6)) {
      a += b;
      b = a - b;
    }
    else b = a;
  }
  
  return a;
};