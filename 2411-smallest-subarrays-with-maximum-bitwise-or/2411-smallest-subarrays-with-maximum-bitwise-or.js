/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(1);
  
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if ((nums[j] | nums[i]) === nums[j]) break;
      
      nums[j] |= nums[i];
      ans[j] = i - j + 1;
    }
  }
  
  return ans;
};