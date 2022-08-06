/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let [i, j, res] = [0, 0, 0];

  while (i < nums1.length && j < nums2.length)
    nums1[i] > nums2[j] ? i++ : (res = Math.max(res, j++ - i));

  return res;
};
