/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let [left, right] = [0, nums.length];
  
  while (left < right) {
    const mid = (left + right) >>> 1;
    if (isOneOfTwins(nums, mid)) left = mid + 1;
    else right = mid;
  }
  
  return nums[left];
};

const isOneOfTwins = (nums, i) => nums[i] === nums[(i & 1) ? (i - 1) : (i + 1)];