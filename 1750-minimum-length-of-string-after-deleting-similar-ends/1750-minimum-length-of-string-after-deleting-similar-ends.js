/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let [l, r] = [0, s.length - 1];
  
  while (l < r && s[l] === s[r]) {
    while (l + 1 < r && s[l + 1] === s[l]) l++;
    while (r - 1 > l && s[r - 1] === s[r]) r--;
    
    l++;
    r--;
  }
  
  return r - l + 1;
};