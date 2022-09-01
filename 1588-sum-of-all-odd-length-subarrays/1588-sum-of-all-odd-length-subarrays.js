/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  const preSum = arr.reduce(
    (acc, curr, i) => (i > 0 && acc.push(acc.at(-1) + curr), acc),
    [arr[0]]
  )
  const n = arr.length;
  let sum = preSum[n - 1];
  
  for (let i = 2; i < n; i += 2) 
    for (let j = i; j < n; j++) 
      sum += preSum[j] - (j > i ? preSum[j - i - 1] : 0);
  
  return sum;
};