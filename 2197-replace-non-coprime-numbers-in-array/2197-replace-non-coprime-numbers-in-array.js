/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
  const stack = [];
  
  for (let num of nums) {
    while (stack.length) {
      const g = gcd(num, stack.at(-1));
      if (g === 1) break;
      
      num *= stack.pop() / g;
    }
    
    stack.push(num);
  }
  
  return stack;
};

const gcd = (a, b) => !b ? a : gcd(b, a % b);