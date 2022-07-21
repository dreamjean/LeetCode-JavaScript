/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return nums.reduce(
    (sequence, curr) => (
      curr > sequence.at(-1)
        ? sequence.push(curr)
        : (sequence[sequence.findIndex((val) => val >= curr)] = curr),
      sequence
    ),
    [nums[0]]
  ).length;
};
