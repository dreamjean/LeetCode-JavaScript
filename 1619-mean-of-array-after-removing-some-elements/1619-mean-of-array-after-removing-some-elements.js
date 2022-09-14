/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  const size = arr.length;
  const skip = size / 20;
  
  return arr
    .sort((a, b) => a - b)
    .slice(skip, size - skip)
    .reduce((a, b) => a + b) / (size - 2 * skip);
};