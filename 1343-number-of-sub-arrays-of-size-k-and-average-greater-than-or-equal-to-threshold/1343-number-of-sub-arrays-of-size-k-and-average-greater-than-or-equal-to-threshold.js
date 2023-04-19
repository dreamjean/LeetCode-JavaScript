/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  const target = threshold * k;
  let sum = arr.slice(0, k).reduce((a, b) => a + b);
  let ans = +(sum >= target);
  
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum >= target) ans++;
  }
  
  return ans;
};