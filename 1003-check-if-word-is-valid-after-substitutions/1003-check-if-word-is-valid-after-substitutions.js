/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  
  for (let ch of s) {
    if (ch === 'c') {
      if (!stack.length || stack.pop() !== 'b') return false;
      if (!stack.length || stack.pop() !== 'a') return false;
    }
    
    else stack.push(ch);
  }
  
  return !stack.length;
};