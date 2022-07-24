/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const sorted = [];
  const ans = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let [left, right] = [0, sorted.length];

    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (nums[i] > sorted[mid]) left = mid + 1;
      else right = mid;
    }

    ans.unshift(left);
    sorted.splice(left, 0, nums[i]);
  }

  return ans;
};
