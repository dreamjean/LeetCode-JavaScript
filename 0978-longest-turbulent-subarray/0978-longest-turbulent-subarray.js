/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let [up, down, ans] = [1, 1, 1];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) [up, down] = [down + 1, 1];
    else if (arr[i] < arr[i - 1]) [up, down] = [1, up + 1];
    else [up, down] = [1, 1];
    
    ans = Math.max(ans, up, down);
  }
  
  return ans;
};