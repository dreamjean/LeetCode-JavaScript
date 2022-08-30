/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;

  for (let num of pushed) {
    stack.push(num);
    while (stack.length && stack.at(-1) === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return !stack.length;
};
