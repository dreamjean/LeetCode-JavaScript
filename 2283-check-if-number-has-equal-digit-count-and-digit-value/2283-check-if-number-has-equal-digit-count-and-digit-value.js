/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const n = num.length;
  const cnt = new Array(n).fill(0);
  
  for (let ch of num) cnt[ch]++;
  
  return cnt.join('') === num;
};