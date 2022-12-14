/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let sum = 0;
  
  for (let ch of s) {
    const x = ch.charCodeAt() - 'a'.charCodeAt() + 1;
    sum += Math.floor(x / 10) + x % 10;
  }
  
  while (--k && sum > 9) {
    let tmp = 0;
    while (sum) {
      tmp += sum % 10;
      sum = Math.floor(sum / 10);
    }
    
    sum = tmp;
  }
  
  return sum;
};