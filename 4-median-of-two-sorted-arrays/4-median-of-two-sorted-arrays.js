/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const [m, n, min, max] = [nums1.length, nums2.length, Infinity, -Infinity];
  let [l, r] = [0, m];

  while (l <= r) {
    const midA = (l + r) >>> 1;
    const midB = ((m + n + 1) >> 1) - midA;

    const maxA = !midA ? max : nums1[midA - 1];
    const maxB = !midB ? max : nums2[midB - 1];
    const minA = midA === m ? min : nums1[midA];
    const minB = midB === n ? min : nums2[midB];

    if (maxA <= minB && maxB <= minA) {
      const maxLeft = Math.max(maxA, maxB);
      return (m + n) % 2 ? maxLeft : (maxLeft + Math.min(minA, minB)) / 2;
    }

    maxA < maxB ? (l = midA + 1) : (r = midA - 1);
  }
};
