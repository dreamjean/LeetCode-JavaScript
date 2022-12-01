/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [];
  let cnt = 0;
  
  for (let c of s) {
    if (c === ')') {
      let sub = '';
      while (stack.length && stack.at(-1) !== '(') {
        const char = stack.pop();
        !(cnt & 1) ? sub = char + sub : sub += char;
      }
      
      stack.pop();
      cnt--;
      stack.push(sub);
    }
    else {
      if (c === '(') cnt++;
      stack.push(c);
    }
  }
  
  return stack.join('');
};