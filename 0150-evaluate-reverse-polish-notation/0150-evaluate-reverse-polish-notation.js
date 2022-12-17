/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  
  for (let token of tokens) {
    if (isNaN(token)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(getResult(a, b, token));
    }
    
    else stack.push(+token);
  }
  
  return stack[0];
};

const getResult = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);
  }
}
