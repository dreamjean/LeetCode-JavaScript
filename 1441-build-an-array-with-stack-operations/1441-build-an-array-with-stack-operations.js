/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const stack = [];
  let j = 0;
  
  for (let i = 1; i <= n; i++) {
    if (target[j] === i) {
      stack.push('Push');
      j++;
    }
    else stack.push('Push', 'Pop');
    
    if (i === target.at(-1)) break;
  }
  
  return stack;
};