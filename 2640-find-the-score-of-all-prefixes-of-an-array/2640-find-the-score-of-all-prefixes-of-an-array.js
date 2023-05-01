/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  const ans = [];
  let [sum, max] = [0, 0];
  
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    nums[i] += max;
    sum += nums[i];
    ans.push(sum);
  }
  
  return ans;
};