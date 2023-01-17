/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function(nums, threshold) {
  nums = [0, ...nums, 0];
  const stack = [0];
  
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] < nums[stack.at(-1)]) {
      const j = stack.pop();
      if (nums[j] > threshold / (i - stack.at(-1) - 1)) 
        return i - stack.at(-1) - 1
    }
    
    stack.push(i);
  }
  
  return -1;
};