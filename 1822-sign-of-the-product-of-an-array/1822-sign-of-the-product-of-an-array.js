/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  return nums.reduce((acc, curr) => acc * (!curr ? 0 : curr < 0 ? -1 : 1), 1);
};
