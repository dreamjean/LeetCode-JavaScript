/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  let [count, i] = [0, 1];
  
  while (!count || i > 1) {
    i = i * 2 % (n - 1);
    count++;
  }
  
  return count;
};