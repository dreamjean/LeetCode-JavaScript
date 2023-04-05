/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let [preSum, ans] = [0, 0];
  
  nums.forEach((num, i) => {
    preSum += num;
    ans = Math.max(ans, Math.ceil(preSum / (i + 1)));
  })
  
  return ans;
};