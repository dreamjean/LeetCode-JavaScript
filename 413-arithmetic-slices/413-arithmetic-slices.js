/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  if (n < 3) return 0;

  let [ans, count, diff] = [0, 0, nums[1] - nums[0]];

  for (let i = 2; i < n; i++) {
    const currDiff = nums[i] - nums[i - 1];
    currDiff === diff ? (ans += ++count) : ([diff, count] = [currDiff, 0]);
  }

  return ans;
};
