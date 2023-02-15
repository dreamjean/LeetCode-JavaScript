/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  for (let i = num.length - 1; i >= 0 && k > 0; i--) {
    num[i] += k;
    k = Math.floor(num[i] / 10);
    num[i] %= 10;
  }
  
  while (k > 0) {
    num.unshift(k % 10);
    k = Math.floor(k / 10);
  }
  
  return num;
};