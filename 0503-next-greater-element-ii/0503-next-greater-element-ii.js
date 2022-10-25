/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length;
  const stack = [];
  const ans = new Array(n).fill(-1);
  
  for (let i = 0; i < n * 2; i++) {
    const num = nums[i % n];
    while (stack.length && nums[stack.at(-1)] < num) {
      const idx = stack.pop();
      ans[idx] = num;
    }
    
    stack.push(i % n);
  }
  
  return ans;
};