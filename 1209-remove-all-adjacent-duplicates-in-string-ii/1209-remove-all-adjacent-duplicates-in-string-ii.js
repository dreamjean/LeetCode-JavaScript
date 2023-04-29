/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = [];
  
  for (let ch of s) {
    if (stack.length && stack.at(-1)[0] === ch) {
      stack.at(-1)[1] += 1;
      if (stack.at(-1)[1] === k) stack.pop();
    }
    else stack.push([ch, 1]);
  }
  
  return stack.reduce((acc, [ch, num]) => acc + ch.repeat(num), '');
};