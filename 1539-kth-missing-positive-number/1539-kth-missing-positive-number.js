/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const set = new Set(arr);
  let num = 0;
  
  while (k) {
    num++;
    if (!set.has(num)) k--;    
  }
  
  return num;
};