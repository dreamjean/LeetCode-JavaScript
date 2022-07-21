/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  return n === 1
    ? nums[0]
    : Math.max(helper(0, n - 2, nums), helper(1, n - 1, nums));
};

const helper = (start, end, nums) => {
  let [include, exclude] = [0, 0];

  for (let j = start; j <= end; j++) {
    let [i, e] = [include, exclude];
    include = e + nums[j];
    exclude = Math.max(i, e);
  }

  return Math.max(include, exclude);
};
