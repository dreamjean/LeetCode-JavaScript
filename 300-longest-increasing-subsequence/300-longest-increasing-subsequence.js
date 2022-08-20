/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return nums.reduce(
    (acc, curr) => {
      if (acc.at(-1) < curr) acc.push(curr);
      else acc[acc.findIndex((num) => num >= curr)] = curr;

      return acc;
    },
    [nums[0]]
  ).length;
};
