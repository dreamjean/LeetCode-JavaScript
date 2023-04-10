/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  return atMost(nums, goal) - atMost(nums, goal - 1);
};

const atMost = (nums, k) => {
  if (k < 0) return 0;
  
  let [l, r, ans] = [0, 0, 0];
  
  while (r < nums.length) {
    k -= nums[r];
    while (k < 0) k += nums[l++];
    
    ans += r - l + 1;
    r++;
  }
  
  return ans;
}