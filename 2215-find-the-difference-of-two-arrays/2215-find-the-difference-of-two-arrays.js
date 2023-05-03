/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ans = [[], []];
  
  set1.forEach((num) => !set2.has(num) && ans[0].push(num));
  
  set2.forEach((num) => !set1.has(num) && ans[1].push(num));
  
  return ans;
};