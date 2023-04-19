/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  const qmax = [];
  const qmin = [];
  let [l1, l2, r1, r2, i] = [0, 0, -1, -1, 0];
  
  for (let num of nums) {
    while (l1 <= r1 && qmax[r1] < num) r1--;
    while (l2 <= r2 && qmin[r2] > num) r2--;
    
    qmax[++r1] = num;
    qmin[++r2] = num;
    
    if (l1 <= r1 && l2 <= r2 && qmax[l1] - qmin[l2] > limit) {
      if (qmax[l1] === nums[i]) l1++;
      if (qmin[l2] === nums[i]) l2++;
      i++;
    }
  }
  
  return nums.length - i;
};