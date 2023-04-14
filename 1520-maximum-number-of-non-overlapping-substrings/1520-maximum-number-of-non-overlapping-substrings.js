/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
  const start = new Array(26).fill(-1);
  const end = new Array(26).fill(-1);
  const n = s.length;
  const ans = [];
  let right = -1;
  
  for (let i = 0; i < n; i++) {
    const idx = charAt(s[i]);
    if (start[idx] == -1) start[idx] = i;
    end[idx] = i;
  }
  
  for (let i = 0; i < n; i++) {
    const idx = charAt(s[i]);
    if (start[idx] !== i) continue;
    
    const newRight = checkSubstringRight(i, s, start, end);
    if (newRight === -1) continue;
    
    if (i > right) ans.push('');
    
    right = newRight;
    ans[ans.length - 1] = s.slice(i, right + 1);
  }
  
  return ans;
};
  
const charAt = (ch) => ch.charCodeAt() - 'a'.charCodeAt(); 

const checkSubstringRight = (l, s, start, end) => {
  let right = end[charAt(s[l])];
  
  for (let i = l; i <= right; i++) {
    let idx = charAt(s[i]);
    if (start[idx] < l) return -1;
    
    right = Math.max(right, end[idx]);
  }
  
  return right;
}