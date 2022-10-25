/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  const stack = [Infinity];
  let ans = 0;

  for (let a of arr) {
    while (stack.at(-1) <= a) {
      const mid = stack.pop();
      ans += mid * Math.min(stack.at(-1), a);
    }

    stack.push(a);
  }

  for (let i = 2; i < stack.length; i++) ans += stack[i] * stack[i - 1];

  return ans;
};
