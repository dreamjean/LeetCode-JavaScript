/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const cnt = new Array(126).fill(0);
  const [n1, n2] = [s1.length, s2.length];
  
  
  for (let i = 0; i < n1; i++) {
    cnt[s1.charCodeAt(i)]++;
    cnt[s2.charCodeAt(i)]--;
  }
  
  if (cnt.every((x) => !x)) return true;
  
  for (let i = n1; i < n2; i++) {
    cnt[s2.charCodeAt(i)]--;
    cnt[s2.charCodeAt(i - n1)]++;
    if (cnt.every((x) => !x)) return true;
  }
  
  return false;
};