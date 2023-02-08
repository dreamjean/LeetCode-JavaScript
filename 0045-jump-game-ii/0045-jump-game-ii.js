/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let [jumps, end, curFarthest] = [0, 0, 0];
  
  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(curFarthest, nums[i] + i);
    if (end === i) {
      end = curFarthest;
      jumps++;
    }
  }
  
  return jumps;
};