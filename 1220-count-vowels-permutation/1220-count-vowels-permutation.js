/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {  
  let [a, e, i, o, u] = [1, 1, 1, 1, 1];
  
  while (--n) {
    [a, e, i, o, u] = [add(e, i, u), add(a + i), add(e + o), i, add(i + o)];
  }
  
  return add(a, e, i, o, u);
};


const add = (...nums) => nums.reduce((a, b) => a + b) % (10 ** 9 + 7);

