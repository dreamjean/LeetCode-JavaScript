/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (nums[mid] === target) return mid;

    nums[mid] < target ? (l = mid + 1) : (r = mid - 1);
  }

  return l;
};
