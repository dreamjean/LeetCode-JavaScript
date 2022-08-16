/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const cnt = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  
  for (let ch of s) cnt[ch.charCodeAt() - a]++;
  
  for (let i = 0; i < s.length; i++) 
    if (cnt[s.charCodeAt(i) - a] === 1) return i;
  
  return -1;
};