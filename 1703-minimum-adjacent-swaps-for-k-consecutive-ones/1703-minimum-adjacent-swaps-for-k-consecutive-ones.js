/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {
  const preSum = [0];
  const [mid1, mid2] = [Math.ceil(k / 2), Math.floor(k / 2)];
  let ans = Infinity;
  
  for (let i = 0; i < nums.length; i++) 
    if (nums[i]) preSum.push(preSum.at(-1) + i);  

  for (let i = 0; i < preSum.length - k; i++) 
    ans = Math.min(ans, preSum[i + k] - preSum[i + mid1] - (preSum[i + mid2] - preSum[i]));
  
  return ans - mid1 * mid2;
};