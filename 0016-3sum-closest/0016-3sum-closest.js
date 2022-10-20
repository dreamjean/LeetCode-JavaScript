/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let closest = Infinity;

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let [l, r] = [i + 1, n - 1];
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) return sum;

      closest =
        Math.abs(target - sum) < Math.abs(target - closest) ? sum : closest;

      if (sum < target) while (l < r && nums[l] === nums[++l]);
      else while (l < r && nums[r] === nums[--r]);
    }
  }

  return closest;
};
