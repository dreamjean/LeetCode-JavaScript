/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const mid = (l + r) >>> 1;
    nums[mid] > nums[r] ? (l = mid + 1) : (r = mid);
  }

  return nums[l];
};
