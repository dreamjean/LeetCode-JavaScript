/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
  const n = arr.length;
  let j = -1;
  
  for (let i = n - 1; i >= 0; --i) {
    if (arr[i] < arr[i - 1]) {
      j = i - 1;
      break;
    }
  }
  
  if (j === -1) return arr;
  
  for (let i = n - 1; i >= 0; --i) {
    if (arr[i] < arr[j] && arr[i] !== arr[i - 1]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      break;
    }
  }
  
  return arr;
};