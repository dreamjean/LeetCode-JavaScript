/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const freqS = new Array(26).fill(0);
  const freqT = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  let ans = 100;
  
  for (let ch of s) freqS[ch.charCodeAt() - a]++;
  for (let ch of target) freqT[ch.charCodeAt() - a]++;
  
  for (let ch of target) {
    const i = ch.charCodeAt() - a;
    ans = Math.min(ans, ~~(freqS[i] / freqT[i]));
  }
  
  return ans;
};