/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce(
    (acc, num, i) => (i > 0 && acc.push(acc[i - 1] + num), acc),
    [nums[0]]
  );
};
