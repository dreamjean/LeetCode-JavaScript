/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const set = new Set('aeiou')
  let [ans, cnt] = [0, 0];
  
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) cnt++;
    if (i >= k && set.has(s[i - k])) cnt--;
    
    ans = Math.max(ans, cnt);
  }
  
  return ans;
};