/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const count = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  const ans = [];
  let [l, r, t] = [0, 0, p.length];
  
  for (let ch of p) 
    count[ch.charCodeAt() - a]++;
  
  while (r < s.length) {
    if (count[s.charCodeAt(r++) - a]-- > 0) t--;
    if (!t) ans.push(l);
    
    while (r - l >= p.length) 
      if (++count[s.charCodeAt(l++) - a] > 0) t++;
  }
  
  return ans;
};