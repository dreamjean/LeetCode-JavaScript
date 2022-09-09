/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [1];
  let [ans, num, sign] = [0, 0, 1];
  
  for (let c of s) {
    if (/[0-9]/.test(c)) num = num * 10 + +c;
    if (/[+-]/.test(c)) {
      ans += num * sign;
      sign = stack.at(-1) * (c === '+' ? 1 : -1);
      num = 0
    }
    
    if (c === '(') stack.push(sign);
    if (c === ')') stack.pop();
  }
  
  return ans + num * sign;
};