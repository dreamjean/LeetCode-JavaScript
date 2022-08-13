/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let ones = s.replace(/0/g, '').length;
  let [zeros, max] = [0, 0];
  
  for (let i = 0; i < s.length - 1; i++) {
    s[i] === '0' ? ++zeros : --ones;
    max = Math.max(max, zeros + ones);
  }
  
  return max;
};