/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let [count, j] = [0, 0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) j = i + 1;
    
    count += i - j + 1;
  }
  
  return count;
};