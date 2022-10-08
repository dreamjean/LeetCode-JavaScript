/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const indexs = nums1.map((_, i) => i);
  const n = nums1.length;
  const ans = new Array(n);
  let [l, r] = [0, n - 1];
  
  indexs.sort((a, b) => nums2[b] - nums2[a]);
  nums1.sort((a, b) => b - a);
  
  for (let i of indexs) {
    ans[i] = nums1[l] > nums2[i] ? nums1[l++] : nums1[r--];
  }
  
  return ans;
};