/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let [currMax, ans] = [0, 0];
  
  arr.forEach((num, i) => {
    currMax = Math.max(currMax, num);
    if (currMax === i) ans++;
  })
  
  return ans;
};