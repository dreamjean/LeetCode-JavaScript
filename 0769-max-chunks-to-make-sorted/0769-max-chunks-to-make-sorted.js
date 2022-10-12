/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let [currMax, ans] = [0, 0];
  
  for (let [i, num] of arr.entries()) {
    currMax = Math.max(currMax, num);
    if (currMax === i) ans++;
  }
  
  return ans;
};