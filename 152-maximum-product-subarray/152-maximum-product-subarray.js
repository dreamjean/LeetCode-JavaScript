/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let [preMax, preMin, ans] = [1, 1, nums[0]];
  
  for (let num of nums) {
    const curMax = Math.max(num, preMax * num, preMin * num);
    const curMin = Math.min(num, preMax * num, preMin * num);
    
    [preMax, preMin, ans] = [curMax, curMin, Math.max(ans, curMax)];
  }
  
  return ans;
};