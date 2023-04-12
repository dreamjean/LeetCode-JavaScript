/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = new Array(26).fill(0);
  let [l, r, maxCount] = [0, 0, 0];
  
  while (r < s.length) {
    maxCount = Math.max(maxCount, ++count[s.charCodeAt(r) - 'A'.charCodeAt()]);
    while (r - l + 1 - maxCount > k) 
      count[s.charCodeAt(l++) - 'A'.charCodeAt()]--;
    
    r++;
  }
  
  return r - l;
};