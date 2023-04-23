/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
  let [l, r, offset] = [0, 1, 0];
  
  while (r + offset < s.length) {
    const [charL, charR] = [s.charCodeAt(l + offset), s.charCodeAt(r + offset)];
    if (charL === charR) ++offset;
    else {
      charL < charR ? (l += offset + 1) : (r += offset + 1);
      
      if (l === r) ++r;
      offset = 0;
    }
  }
  
  return s.slice(l);
};