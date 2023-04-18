/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let [j, count0, ans] = [0, 0, 0];
  
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) count0++;
    while (count0 > 1) {
      if (!nums[j++]) count0--;
    }  
    
    ans = Math.max(ans, i - j);
  }
  
  return ans;
};