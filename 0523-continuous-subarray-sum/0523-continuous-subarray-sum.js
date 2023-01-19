/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const set = new Set();
  let [sum, preSum] = [0, 0];
  
  for (let num of nums) {
    sum = (sum + num % k) % k;
    if (set.has(sum)) return true;
    
    set.add(preSum);
    preSum = sum;
  }
  
  return false;
};