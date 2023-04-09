/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const count = [0, 0, 0];
  const a = 'a'.charCodeAt();
  let [l, r, ans] = [0, 0, 0];
  
  while (r < s.length) {
    count[s.charCodeAt(r++) - a]++;
    while (count[0] && count[1] && count[2]) 
      --count[s.charCodeAt(l++) - a];
    
    ans += l;
  }
  
  return ans;
};