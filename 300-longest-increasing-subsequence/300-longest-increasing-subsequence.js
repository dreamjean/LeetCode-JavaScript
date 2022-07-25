/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return nums.reduce(
    (acc, curr) => (
      curr > acc.at(-1)
        ? acc.push(curr)
        : (acc[acc.findIndex((num) => num >= curr)] = curr),
      acc
    ),
    [nums[0]]
  ).length;
};
