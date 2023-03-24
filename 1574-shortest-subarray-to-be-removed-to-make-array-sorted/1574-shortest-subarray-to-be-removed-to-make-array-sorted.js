/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
  const n = arr.length;
  let [l, r] = [0, n - 1];
  
  while (r > 0 && arr[r - 1] <= arr[r]) r--;
  
  let ans = r;
  while (l < r && (!l || arr[l - 1] <= arr[l])) {
    while (r < n && arr[r] < arr[l]) r++;
    
    ans = Math.min(ans, r - l - 1);
    l++;
  }
  
  return ans;
};