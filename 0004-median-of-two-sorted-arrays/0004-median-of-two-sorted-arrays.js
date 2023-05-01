/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const [n1, n2] = [nums1.length, nums2.length];
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
  
  const [min, max] = [Infinity, -Infinity];
  let [low, high] = [0, n1];
  
  while (low <= high) {
    const mid1 = (low + high) >>> 1;
    const mid2 = ((n1 + n2 + 1) >> 1) - mid1;
    
    const maxA = !mid1 ? max : nums1[mid1 - 1];
    const maxB = !mid2 ? max : nums2[mid2 - 1];
    const minA = mid1 === n1 ? min : nums1[mid1];
    const minB = mid2 === n2 ? min : nums2[mid2];
    
    if (maxA <= minB && maxB <= minA) {
      const leftMax = Math.max(maxA, maxB);
      return ((n1 + n2) % 2) ? leftMax : (leftMax + Math.min(minA, minB)) / 2;
    }
    
    maxA < minB ? (low = mid1 + 1) : (high = mid1 - 1);
  }
};