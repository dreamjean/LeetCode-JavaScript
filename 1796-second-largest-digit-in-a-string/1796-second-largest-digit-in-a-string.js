/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let [a, b] = [-1, -1];
  
  for (let c of s) {
    if (/[0-9]/.test(c)) {
      const num = +c;
      if (num > a) [a, b] = [num, a];
      if (num < a && num > b) b = num;
    }
  }
  
  return a === -1 || b === -1 ? -1 : b;
};