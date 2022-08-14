/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const cnt = new Array(26).fill(0);
  const a = 'A'.charCodeAt();
  let [l, r, maxCount] = [0, 0, 0];
  
  while (r < s.length) {
    const key = s.charCodeAt(r) - a;
    maxCount = Math.max(maxCount, ++cnt[key]);
    
    while (r - l + 1 - maxCount > k) cnt[s.charCodeAt(l++) - a]--;
    
    r++;
  }
  
  return r - l;
};