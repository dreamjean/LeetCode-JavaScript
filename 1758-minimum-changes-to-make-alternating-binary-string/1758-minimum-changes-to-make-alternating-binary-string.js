/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let [cnt1, cnt2] = [0, 0];
  
  for (let i = 0; i < s.length; i++) {
    if (!(i & 1)) s[i] !== '0' ? cnt1++ : cnt2++;
    if (i & 1) s[i] !== '1' ? cnt1++ : cnt2++;
  }
  
  return Math.min(cnt1, cnt2);
};