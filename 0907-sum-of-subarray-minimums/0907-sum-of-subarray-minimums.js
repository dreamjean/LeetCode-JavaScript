/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  arr.push(-1);
  const stack = [-1];
  const mod = 1e9 + 7;
  let ans = 0;
  
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 1 && arr[stack.at(-1)] >= arr[i]) {
      let j = stack.pop();
      ans += arr[j] * (j - stack.at(-1)) * (i - j);
    }
    
    stack.push(i);
  }
  
  return ans % mod;
};