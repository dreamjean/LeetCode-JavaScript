/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  return n === 1
    ? nums[0]
    : Math.max(helper(nums, 0, n - 2), helper(nums, 1, n - 1));
};

const helper = (nums, start, end) => {
  let [include, exclude] = [0, 0];

  for (let j = start; j <= end; j++) {
    let [i, e] = [include, exclude];
    include = e + nums[j];
    exclude = Math.max(i, e);
  }

  return Math.max(include, exclude);
};
