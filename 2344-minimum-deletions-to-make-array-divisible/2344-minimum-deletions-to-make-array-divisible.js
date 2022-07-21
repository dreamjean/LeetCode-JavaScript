/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function (nums, numsDivide) {
  nums.sort((a, b) => a - b);
  const g = numsDivide.reduce((acc, curr) => ((acc = gcd(acc, curr)), acc), 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (!(g % nums[i])) return i;
  }

  return -1;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
