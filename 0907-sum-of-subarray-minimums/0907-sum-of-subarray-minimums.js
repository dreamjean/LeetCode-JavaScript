/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  arr.push(-1);
  const stack = [-1];
  const mod = 1e9 + 7;
  let ans = 0;
  
  for (let r = 0; r < arr.length; r++) {
    while (stack.length > 1 && arr[stack.at(-1)] >= arr[r]) {
      let l = stack.pop();
      ans += arr[l] * (l - stack.at(-1)) * (r - l);
    }
    
    stack.push(r);
  }
  
  return ans % mod;
};