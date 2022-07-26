/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let [low, high] = [0, nums.length];

  while (low < high) {
    const mid = (low + high) >> 1;
    if (nums[mid] === target) return mid;

    nums[mid] > target ? (high = mid) : (low = mid + 1);
  }

  return low;
};
