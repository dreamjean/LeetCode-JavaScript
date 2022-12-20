/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const stack = [Infinity];
  let ans = 0;
  
  for (let num of arr) {
    while (stack.at(-1) <= num) {
      const mid = stack.pop();
      ans += mid * Math.min(stack.at(-1), num);
    }
    
    stack.push(num);
  }

  for (let i = 2; i < stack.length; i++) {
    ans += stack[i] * stack[i - 1];
  }
  
  return ans;
};