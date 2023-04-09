/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
  const queue = [];
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] += queue.length ? nums[queue[0]] : 0;
    while (queue.length && nums[queue.at(-1)] <= nums[i]) queue.pop();
    
    if (nums[i] > 0) queue.push(i);
    if (queue.length && i - queue[0] >= k) queue.shift();
  }
  
  return Math.max(...nums);
};