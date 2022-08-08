/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return nums.reduce(
    (acc, curr) => {
      if (curr > acc[acc.length - 1]) acc.push(curr);
      else acc[acc.findIndex((v) => v >= curr)] = curr;
      
      return acc;
    },
    [nums[0]]
  ).length;
};
