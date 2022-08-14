/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  let max = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else {
      stack.pop();
      stack.length ? max = Math.max(max, i - stack.at(-1)) : stack.push(i);
    }
  }
  
  return max;
};