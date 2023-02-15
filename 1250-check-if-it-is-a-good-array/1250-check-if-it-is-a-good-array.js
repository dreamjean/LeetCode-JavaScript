/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
  return nums.reduce(gcd) === 1;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));