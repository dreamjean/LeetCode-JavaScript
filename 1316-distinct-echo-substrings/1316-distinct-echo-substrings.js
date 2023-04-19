/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
  const set = new Set();
  const n = text.length;
  let ans = 0;
  
  for (let len = 1; len <= n / 2; len++) {
    let [l, r, count] = [0, len, 0];
    
    while (l < n - len) {
      text[l] === text[r] ? count++ : count = 0;
      
      if (count === len) {
        set.add(text.slice(l - len + 1, l + 1));
        count--;
      }
      
      l++;
      r++;
    }
  }
  
  return set.size;
};