/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const end = new Array(26).fill(0);
  const mod = 1e9 + 7;
  let ans = 0;
  
  for (let ch of s) {
    const i = ch.charCodeAt() - 'a'.charCodeAt();
    const others = (ans - end[i] + mod) % mod;
    end[i] = ans + 1;
    ans = (end[i] + others) % mod;
  }
  
  return ans;
};