/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = { '(': ')', '[': ']', '{': '}' };
  
  for (let x of s) {
    if (x in map) stack.push(map[x]);
    else if (stack.pop() !== x) return false;
  }
  
  return stack.length === 0;
};