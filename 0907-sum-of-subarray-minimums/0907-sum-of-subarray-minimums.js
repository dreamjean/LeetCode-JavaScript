/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const n = arr.length;
  const mod = 1e9 + 7;
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      sum += min;
    }
  }
  
  return sum % mod;
};