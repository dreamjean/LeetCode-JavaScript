/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let [sum1, sum2, res] = [0, 0, 0];
  
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += sorted[i];
    
    res += sum1 === sum2;
  }
  
  return res;
};