/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let [l, r] = [0, arr.length - k];
  
  while (l < r) {
    const mid = (l + r) >>> 1;
    if (x - arr[mid] > arr[mid + k] - x) l = mid + 1;
    else r = mid;
  }
  
  return arr.slice(l, l + k);
};