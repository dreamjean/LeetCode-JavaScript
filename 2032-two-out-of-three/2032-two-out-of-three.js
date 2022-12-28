/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const ans = [];
  
  for (let i = 1; i <= 100; i++) {
    if (
      (set1.has(i) && set2.has(i)) || 
      (set1.has(i) && set3.has(i)) ||
      (set2.has(i) && set3.has(i))
    )
      ans.push(i);
  }
  
  return ans;
};