/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  if (start < 0 || start >= arr.length || arr[start] < 0) return false;
  if (!arr[start]) return true;
  
  arr[start] *= -1;
  
  return canReach(arr, start + arr[start]) || canReach(arr, start - arr[start]);
};