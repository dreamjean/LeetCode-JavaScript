/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  const n = nums.length;
  const newNums = [];
  
  if (n === 1) return nums[0];
  
  for (let i = 1; i < n; i++) {
    const sum = (nums[i - 1] + nums[i]) % 10;
    newNums.push(sum);
  }
  
  return triangularSum(newNums);
};