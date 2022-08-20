/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [sum, max] = [0, nums[0]];

  for (let num of nums) {
    sum = Math.max(num, sum + num);
    max = Math.max(max, sum);
  }

  return max;
};
