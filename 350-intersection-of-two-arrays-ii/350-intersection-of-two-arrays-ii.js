/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = nums1.reduce(
    (acc, curr) => (acc[curr] ? acc[curr]++ : (acc[curr] = 1), acc),
    {}
  );

  return nums2.filter((num) => map[num] && map[num]--);
};
