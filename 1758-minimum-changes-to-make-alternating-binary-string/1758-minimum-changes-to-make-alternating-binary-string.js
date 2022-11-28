/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let cnt = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (+s[i] !== i % 2) cnt++;
  }
  
  return Math.min(cnt, s.length - cnt);
};