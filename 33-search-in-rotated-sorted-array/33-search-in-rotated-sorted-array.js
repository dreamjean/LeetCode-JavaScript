/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (nums[mid] === target) return mid;

    if (nums[mid] > nums[r]) {
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }

  return -1;
};
