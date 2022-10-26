/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const set = new Set();
  let [sum, preSum] = [0, 0];

  return nums.some((num) => {
    sum += num;
    if (k) sum %= k;
    if (set.has(sum)) return true;

    set.add(preSum);
    preSum = sum;
  });
};
