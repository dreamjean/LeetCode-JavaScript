/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  const count = [0, 0, 0];
  const n = s.length;
  const a = 'a'.charCodeAt();
  let [l, r, window] = [0, 0, 0];
  
  for (let ch of s) count[ch.charCodeAt() - a]++;
  
  if (count.some((x) => x < k)) return -1;
  
  while (r < n) {
    const index = s.charCodeAt(r) - a;
    count[index]--;
    
    while (count[index] < k) count[s.charCodeAt(l++) - a]++;
    
    window = Math.max(window, r - l + 1);
    r++;
  }
  
  return n - window;
};