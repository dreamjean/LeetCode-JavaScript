/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  text += ' ';
  const count = new Array(27).fill(0);
  const [n, a] = [text.length, 'a'.charCodeAt()];
  let [start, ans] = [0, 1];
  
  for (let ch of text) count[ch.charCodeAt() - a]++;
  
  for (let i = 0; i < n; i++) {
    if (text[i] === text[start]) continue;
    
    let j = i + 1;
    while (j < n && text[j] === text[start]) j++;
    
    let cnt = j - start - 1;
    if (cnt < count[text.charCodeAt(start) - a]) cnt++;
    
    ans = Math.max(ans, cnt);
    start = i;
  }
  
  return ans;
};