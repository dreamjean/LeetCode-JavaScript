/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let [jumps, end, farCanReach] = [0, 0, 0];
  
  for (let i = 0; i < nums.length - 1; i++) {
    farCanReach = Math.max(farCanReach, nums[i] + i);
    if (i === end) {
      end = farCanReach;
      jumps++;
    }
  }
  
  return jumps;
};