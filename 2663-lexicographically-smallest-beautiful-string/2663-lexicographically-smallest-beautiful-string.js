/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function(s, k) {
  const pos = [...s].map((char) => char.charCodeAt());
  const n = pos.length;
  const a = 'a'.charCodeAt();
  let i = n - 1;
  pos[i]++;
  k += a;
  
  while (i < n) {
    if (pos[i] === k) {
      if (!i) return '';
      
      pos[i] = a;
      pos[--i]++;
    }
    
    else if ((i > 0 && pos[i] === pos[i - 1]) || (i > 1 && pos[i] === pos[i - 2]))
      pos[i]++;
    
    else i++;
  }
  
  return pos.map((p) => String.fromCharCode(p)).join('');
};