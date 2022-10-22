/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  let [l, r] = [-1, -1];
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (l === -1) l = i;
    else if (r === -1) r = i;
    else return false;
  }
  
  return s1[l] === s2[r] && s2[l] === s1[r];
};