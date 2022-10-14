/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const end = new Array(26).fill(0);
  const mod = 1e9 + 7;
  
  for (let char of s) {
    const i = char.charCodeAt() - 'a'.charCodeAt();
    end[i] = (end.reduce((a, b) => a + b) + 1) % mod;
  }
  
  return end.reduce((a, b) => a + b) % mod;
};