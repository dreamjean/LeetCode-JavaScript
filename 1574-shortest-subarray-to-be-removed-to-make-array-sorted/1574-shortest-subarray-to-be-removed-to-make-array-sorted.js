/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
  const n = arr.length;
  let [l, r] = [0, n - 1];
  
  while (r >= 1 && arr[r - 1] <= arr[r]) r--;
  
  let ans = r;
  while (l < r && (!l || arr[l - 1] <= arr[l])) {
    while (r < n && arr[l] > arr[r]) r++;
    
    ans = Math.min(ans, r - l - 1);
    l++;
  }
  
  return ans;
};