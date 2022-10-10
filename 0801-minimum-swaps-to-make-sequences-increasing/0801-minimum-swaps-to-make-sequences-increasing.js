/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  let [swap, noSwap] = [1, 0];
  
  for (let i = 1; i < nums1.length; i++) {
    let [swap2, noSwap2] = [Infinity, Infinity];
    if (nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i]) {
      noSwap2 = noSwap;
      swap2 = swap + 1;
    }
    if (nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i]) {
      noSwap2 = Math.min(noSwap2, swap);
      swap2 = Math.min(swap2, noSwap + 1);
    }
    
    [swap, noSwap] = [swap2, noSwap2];
  }
  
  return Math.min(swap, noSwap);
};