/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};

const atMost = (nums, k) => {
  const count = {};
  let [l, r, ans] = [0, 0, 0];
  
  while (r < nums.length) {
    if (!(nums[r] in count)) count[nums[r]] = 0;
    if (!count[nums[r]]++) k--;
    
    while (k < 0) {
      if (!--count[nums[l++]]) k++;
    }
    
    ans += r - l + 1;
    r++;
  }
  
  return ans;
}