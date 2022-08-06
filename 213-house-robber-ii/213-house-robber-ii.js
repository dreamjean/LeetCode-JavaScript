/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  return n === 1
    ? nums[0]
    : Math.max(helper(0, n - 2, nums), helper(1, n - 1, nums));
};

const helper = (start, end, nums) => {
  let [prev1, prev2] = [0, 0];

  for (let i = start; i <= end; i++)
    [prev1, prev2] = [prev2, Math.max(prev2, prev1 + nums[i])];

  return prev2;
};
