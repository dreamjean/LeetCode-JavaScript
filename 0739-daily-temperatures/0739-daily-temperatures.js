/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  
  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
      const j = stack.pop();
      ans[j] = i - j;
    }
    
    stack.push(i);
  }
  
  return ans;
};