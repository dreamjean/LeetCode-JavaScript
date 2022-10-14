/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const set = new Set(target);
  const stack = [];
  
  for (let i = 1; i <= n; i++) {
    stack.push('Push');
    if (!set.has(i)) stack.push('Pop');
    if (i == target.at(-1)) break;
  }
  
  return stack;
};